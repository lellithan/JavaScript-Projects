function color_function() {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = " is a great color!";
    switch(colors) {
        case "Red":
            color_output = "Red" + color_string;
        break;
        case "Yellow":
            color_output = "Yellow" + color_string;
        break;
        case "Green":
            color_output = "Green" + color_string;
        break;
        case "Blue":
            color_output = "Blue" + color_string;
        break;
        case "Pink":
            color_output = "Pink" + color_string;
        break;
        case "Purple":
            color_output = "Purple" + color_string;
        break;
        default:
            color_output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = color_output;
}

function hello_world_function() {
    var A = document.getElementsByClassName("click");
    console.log(A);
    A[0].innerHTML = "The text has changed!";
}

// painting our canvas
const c = document.getElementById("ID_Name");
const ctx = c.getContext("2d");

const grd = ctx.createLinearGradient(0, 0, 375, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);

ctx.beginPath();   
ctx.moveTo(20, 20);
ctx.lineTo(100, 20);
ctx.arcTo(150, 20, 150, 70, 50);
ctx.lineTo(150, 120);

ctx.fillStyle = "red";
ctx.fill();