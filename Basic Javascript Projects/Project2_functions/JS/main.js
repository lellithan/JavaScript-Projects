function myFunction() { // Our first function that instantiates a variable and then uses the += operator to conatenate two strings together and apply the return to the inner portion of the HTML element
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

// Grabbing the innerHTML of our hidden p to display as an alert
function showAlert() {
    window.alert("A hidden <p> element holds the innerHTML of: " + document.getElementById("hidden").innerHTML);
}

// Arithmetic functions
function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}