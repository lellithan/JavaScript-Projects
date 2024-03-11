function getReceipt() { // function that is called when the place order button is pressed
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); // make an array of our different sizes

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) { // iterate the array and if we have one checked and returns true procced and set the value of the checked item to a var
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // apply a value to sizeTotal, will be added to the toppingTotal later
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal; // print information to the console about our total so far
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00"); 
    getTopping(runningTotal, text1);// time to calculate the toppings
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) { // create an array of our toppings class and iterate it looking for true booleans in the 'checked' variable
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); // push the topping selected to the end of an array
            console.log("selected topping item:  (" + toppingArray[j].value + ")"); // print in the console the topping selected
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length; // topping count is the length of our array
    if (toppingCount > 1) { // if a topping has been selected, subtract 1 dollar because we are nice and giving a free topping
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); // add the total of our toppings to our runningTotal we passed in
    console.log("total selected topping items: " + toppingCount); // print the toppings information to the console
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = "<h3>Total: <strong>$" +  //now we pring our total to the webpage
        runningTotal + ".00" + "</strong></h3>";
}