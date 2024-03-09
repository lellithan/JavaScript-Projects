
let activePlayer = "X"; // this variable keeps track of whose turn it is
let selectedSquares = []; // an array to store an array of moves

function placeXORO(squareNumber) { // a function to place either X or O

    if (!selectedSquares.some(element => element.includes(squareNumber))){  // check our array of selectedSquares using .some, checking to make sure that the element of squareNumber is empty. using the ! operand we want our some to return false, which will return true and enter our if
        
        let select = document.getElementById(squareNumber); // link the contents of our arguments element to select

        if (activePlayer === 'X'){ // check which player character is active, and place the corresponding image to the attribute "backgroundImage"
            select.style.backgroundImage = 'url(images/x.png)';
        } else {
            select.style.backgroundImage = 'url(images/o.png)';
        }

        selectedSquares.push(squareNumber + activePlayer); // push() method takes the two string values and concatenates them and pushes them onto the end of our array
        checkWinConditions(); //

        if (activePlayer === 'X') { // switch the players turn after checking if the game is over or not
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        audio('./media/place.mp3'); // play the audio to indicate placing down an X or an O

        if (activePlayer === 'O') { // if it is the computer's turn we disable to ability to click and use setTimout function to run code after a delay of 1 sec (1000 miliseconds)
            disableClick();
            setTimeout(function () { computersTurn();}, 1000);
        }

        return true; // return true so when we are executing the computersTurn() function so it's if statement will succeed
    }

    function computersTurn() {
        
        let success = false; 
        let pickASquare;

        while (!success) { // enter loop while success is = to false
            pickASquare = String(Math.floor(Math.random() * 9)); // instatiate pickASquare to be equal to a string of a random int between 0 and 8

            if (placeXORO(pickASquare)){ // our return statement at work here
                placeXORO(pickASquare); 
                success = true; // set success to true and exit the while loop
            }
        }
    }
}

function checkWinConditions() {
    // a bunch of if else's checking each possible combination to win and then calling drawWinLine to draw the winning line on top of the winning player
    if      (arrayIncludes('0X','1X','2X')) { drawWinLine(50, 10, 558, 100); }
    else if (arrayIncludes('3X','4X','5X')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6X','7X','8X')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0X','3X','6X')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1X','4X','7X')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2X','5X','8X')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6X','4X','2X')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0X','4X','8X')) { drawWinLine(100, 100, 520, 520); }

    else if (arrayIncludes('0O','1O','2O')) { drawWinLine(50, 10, 558, 100); }
    else if (arrayIncludes('3O','4O','5O')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6O','7O','8O')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0O','3O','6O')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1O','4O','7O')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2O','5O','8O')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6O','4O','2O')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0O','4O','8O')) { drawWinLine(100, 100, 520, 520); }

    else if (selectedSquares.length >= 9){ // no winning combos found and our array is "full", play the "tie" sound and reset the game
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame();}, 500);
    }

    function arrayIncludes(squareA, squareB, squareC) { // search our array using includes and the passed arguments i.e. 0X, 1X, 2X.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        if (a === true && b === true && c === true) { return true; } // if they all return true, run the if statement and return true and execute drawWinLine
    }
}

function disableClick() { 
    body.style.pointerEvents = 'none'; // set the body element's style attribute, pointerEvents, to 'none'. no events with the pointer = no onclick
    setTimeout(function () { body.style.pointerEvents = 'auto'}, 1000); // wait 1 second and then return pointerEvents back to 'auto'
}

function audio(audioURL) { // create a let using the js constructor Audio()
    let audio = new Audio(audioURL);
    audio.play(); //using the play() method from Audio(), play the file contained within the object
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { // we pass in our coords from the else ifs
    const canvas = document.getElementById('win-lines'); // instantiate a const to equal our 'win-lines' canvas element
    const c = canvas.getContext('2d'); // c equals the 2d space of our canvas

    let x1 = coordX1, //instatiate our agruments to variables
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1, // two variables we can manipulate
        y = y1;

    function animateLineDrawing() { 
        const animationLoop = requestAnimationFrame(animateLineDrawing); // create a loop of animation

        c.clearRect(0, 0, 608, 608); // first we clear the canvas
        c.beginPath(); // begin a path = time to start drawing on our canvas
        c.moveTo(x1, y1); // move our "pen" to coords x1 y1
        c.lineTo(x, y); // the end point of our line
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke(); // stroke method to start drawing

        if(x1 <= x2 && y1 <= y2) { //check if we've reached our endpoint
            if (x < x2){ x += 10; } // add 10 to previous endpoint
            if (y < y2){ y += 10; } // 
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } // necessary for 6, 4, 2 win
        }

        if (x1 <= x2 && y1 >= y2) { // necessary for 6, 4, 2 win
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    
    function clear() {
        const animationLoop = requestAnimationFrame(clear); //animation loop
        c.clearRect(0, 0, 608, 608); // clear our rectangle in canvas
        cancelAnimationFrame(animationLoop); // end animation
    }

    disableClick(); // disable point events
    audio('./media/winGame.mp3'); // play the win jingle
    animateLineDrawing(); // draw the victory line
    setTimeout(function () { clear(); resetGame(); }, 1000); // pause 1 sec and then clear canvas and reset game
}

function resetGame() { //iterate the table and clear the images
    for (let i = 0; i < 9; i++){
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = []; //reset the array
}