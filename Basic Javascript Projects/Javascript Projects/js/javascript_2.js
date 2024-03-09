function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("First name must be filled out.");
      return false;
    }
}

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is owned by " + character.innerHTML);
}