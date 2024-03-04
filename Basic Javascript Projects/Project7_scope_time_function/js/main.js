var X = 10; // declaring a global variable
function Add_numbers_1() {
    var Y = 15; 
    document.write(20 + X + "<br"); // writing some math using our global variable
}
function Add_numbers_2() {
    console.log(Y + 100); // error messagde produced in our console because variable Y is a local elemnt to the add_number 1 function
}
Add_numbers_1();
Add_numbers_2();
function get_Date() { // Using an if statement the function checks the time and displays a message based on whether the time is before 6pm or not
    if(new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() { // if else statement that compares our vlalue from our html input to see if it is greater than or equal to 18, if not then complete else statement
    Age = document.getElementById("Age").ariaValueMax;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() { // again using the Date object to grab the time in hours and store in a variable, use that var to compare and complete our if else if statement
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}