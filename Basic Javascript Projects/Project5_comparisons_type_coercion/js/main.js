document.write(typeof 5); // check var type of 5
document.write("106" + 17); // concatenate, not add, 17 is coerced to string
document.write(2E310);
document.write(isNaN(2E310));
document.write(-2E310);
document.write(5 > 2);
console.log(2 + 2);
console.log(5 > 6);
document.write(10 == 10);
document.write(3 == 11);

var X = 10;
var Y = 10;
document.write(X === Y); // same value and type = true
Y = "9";
document.write(X === Y); // different value and type = false
Y = "10";
document.write(X === Y); // same value but not type = false
Y = 19;
document.write(X === Y); // same type not value = false

document.write(5 > 2 && 10 > 4); // if both 5 is greater than 2 and 10 is greater than 4 then return true

document.write(5 > 10 && 10 > 4); // return false because 5 is not greater than 10

document.write(5 > 10 || 10 > 4); // OR operator, if 5 is greater than 10 or 10 is greater than 4 return true

document.write(5 > 10 || 10 > 20); // neither are true so it returns false

function myFunction() {

    // document.getElementById("Test").innerHTML = 0 / 0; //returns NaN, uncommented line 6 will produce true and line 7 will produce false
    // document.getElementById("Test").innerHTML = isNaN('This is a string');
    // document.getElementById("Test").innerHTML = isNaN('10000');

    document.getElementById("Test").innerHTML = 2E310; // change p element inner to infinity, uncommenting line 12 produces -infinity
    // document.getElementById("Test").innerHTML = -2E310;

}

function notFunction() {
    document.getElementById("Not").innerHTML = !(20 > 10); // not operator returns the boolean logic's inverse
    // document.getElementById("Not").innerHTML = !(5 > 10); // uncomment and innerHTML displays true because of the not operator
}