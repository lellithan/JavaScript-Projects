function myFunction() { // Our first function that instantiates a variable and then uses the += operator to conatenate two strings together and apply the return to the inner portion of the HTML element
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}