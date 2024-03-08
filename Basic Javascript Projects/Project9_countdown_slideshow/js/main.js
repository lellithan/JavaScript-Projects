function countdown() {
    var seconds = document.getElementById("seconds").value;
 
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

// this is our index, it keeps track of where we our in our slideshow
let slideIndex = 1; // "let" is a keyword that, unlike var, has block scope and cannot be redeclared in the same scope
showSlides(slideIndex);

// our function that will allow traversal between slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i; // this is our incremental variable that will be defined within the scope of our for loops
    let slides = document.getElementsByClassName("mySlides"); // variable slides is = to all the elements of the class name "mySlides"
    let dots = document.getElementsByClassName("dot"); 
    if (n > slides.length) {slideIndex = 1} // compare n argument to the length of our slides, which is is three. if n is greater than our 
    // length we set the index back to 1 taking us back to the first slide
    if (n < 1) {slideIndex = slides.length} // this does the inverse of our previous if, we check to see if we have hit the negatives of our index, if so
    // we reset our slide index to the max length of our slides taking the user back to the end of our slides
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; // iterate through the slides array and set the display to "none" so we dont have overlapping images
    }
    for (i = 0; i < dots.length; i++) {
        // iterate to find the "active" dot and then replace it with ""
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // now that we've set all our slides to display "none" we're gonna use the index to make our active slide appear
    // making sure to use our slideIndex then subtracting one because arrays count using "0 - 9" 0 being the first value of the array
    // 0 = first image
    // 1 = second image
    // 2 = third image
    slides[slideIndex - 1].style.display = "block";
    // same thing with our image display we are setting the correct dot to be "active" changing it's styling
    dots[slideIndex - 1].className += " active";
}