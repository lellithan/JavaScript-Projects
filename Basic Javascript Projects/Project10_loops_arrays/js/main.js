// a while loop that will iterate and add the variable i to an element until it reaches 0, which it will print then exit
function Call_Loop() {
    var i = 10;
    var Digit = "";
    while (i >= 0)
    {
        Digit += "<br>" + i;
        --i;
    }
    Digit += "<br> The total length of our Digit var is: " + Digit.length; 
    document.getElementById("Loop").innerHTML = Digit;
}

// declaring an array of Instruments to iterate through and then concatenate to our variable Content then set to an element
var Instruments = ["Guitar", "Drums", "Piano"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// another array that we instantiate individually by the use of the index
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}

// const is created where we then add a key and then change the value of an existing key
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + "; it's color is " + Musical_Instrument.color;
}

// use of let and it's scope capabilities, x within the brackets will 33 and then return to the original value of 82 after exiting the brackets
function let_function() {
    var X = 82;
    var string = "";
    string += X;
    {
        let X = 33;
        string += "<br>" + X;
    }
    string += "<br>" + X;
    document.getElementById("let").innerHTML = string;
}

// a quick demo utilizing the return statement, make a call to a function with a parameter to concatenate it onto the string "Hello "
document.getElementById("demo").innerHTML = myFunction("John");

function myFunction(name) {
  return "Hello " + name;
}

// an object example with values and a method to describe the values of it's contained keys
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

// using for break and continue to create the contents of element, our first for loop steps out of our loop at 3 and the second for loop steps over iteration i = 3
let text = "Let's use break to make a paragraph element:<br>";
for (let i = 0; i < 10; i++){
    if (i === 3) {break}
    text += "The number is " + i + "<br>";
}
text += "Now let's use continue: <br>";
for (let i = 0; i < 10; i++){
    if (i === 3) {continue}
    text += "The number is " + i + "<br>";
}
document.getElementById("break_continue").innerHTML = text;
  