function dictionary() { // create an object and instantiate different properties
    var animal = {
        Species:"Dog",
        Color:"Black tricolor",
        Breed:"Bernese Mountain Dog",
        Age:"2",
        Name:"Wade",
        Name:"Not Wade" // will always grab the data "Not Wade" because it comes last in the pipelin of our instantiation
    };
    delete animal.Name;
    document.getElementById("Dictionary").innerHTML = animal.Name; // grab the name using the key value "Name"
}