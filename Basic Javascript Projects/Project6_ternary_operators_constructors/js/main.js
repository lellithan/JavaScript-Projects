function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function age() {
    var age, voteString;
    age = document.getElementById("age").value;
    voteString = (age >= 18) ? "You are legally allowed to vote.":"You are not of legal age to vote."
    document.getElementById("vote").innerHTML = voteString;
}

// keywords and objects | constructor function
function Vehicle(Make, Model, Year, Color) {
    // using "this"
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// using "new"
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1972, "Mustard");
function getVehicle() {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year
}

//nested functions
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;} // this is our nested function
        Plus_one();
        return Starting_point;
    }
}