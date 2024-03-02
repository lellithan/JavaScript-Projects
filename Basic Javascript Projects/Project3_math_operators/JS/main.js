// Arithmetic functions

 //Instantiate a var through an operation then replace math id with sum
function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var sum = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + sum;
}

function division() {
    var sum = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + sum;
}

// perform multiple operands and instiate the sum to our variable, display sum in our Math id
function more_Math() {
    var sum = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + sum;
}

// show the remainder of 25 / 6 with the modulus operand
function modulus() {
    var sum = 25 % 6;
    document.getElementById("Math").innerHTML = "Remainder of 25 / 6 is: " + sum;
}

// negation operator alters our variable to display it's inverse negative
function negation() {
    var x = 10;
    document.getElementById("Math").innerHTML = "The opposite negative integer of 10 = " + -x;
}

// Increment and decrement
function increment() {
    var X = 5;
    X++;
    document.getElementById("Math").innerHTML = "5++ = " + X;
}

function decrement() {
    var X = 5;
    X--;
    document.getElementById("Math").innerHTML = "5-- = " + X;
}

//Random - using the JS Math object we grab a random number between 1 and 100 and display it in a popup
function randomPopup() {
    window.alert(Math.random() * 100);
}