function full_Sentence() { // use of concat to build a string of our 4 different variables
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() { // we grab the characters of our string between the range of 27 and 33 | starting at 0
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section;
}

function upper() { // takes the lower variable and converts it into an uppercase word using the method toUpperCase
    var lower = "hello";
    var upper = lower.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}

function searchText() { // find the index in our string where work first shows
    var newString = "All work and no play makes Johnny a dull boy.";
    document.getElementById("search").innerHTML = newString.search("work");
}

function string_Method() { // convert our X numeral into a different primitive type of string
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { // using precision we shorten our numeral to display 10 of its places
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function Fixed_Value() { // using two different methods here we print our value variable in a fixed format of 5 places past the decimal and then displaying the primitive value of our X variable
    var value = 13.769;
    document.getElementById("Fixed_Value").innerHTML = "toFixed(5): " + value.toFixed(5) + " | valueOf(): " + value.valueOf();
}