/*
*********************************************
Title: Jasa-dino-app.js
Author: Jeremy Jasa
Date: 14 May 2023
Description: The JavaScript for the Jasa-dino app.
**********************************************
*/

//Creates the parent class with the one variable and one method. //
class Gigantosaurus {
  constructor(name) {
    this.name = name;
  }
  roar() {
    return this.name + " says: rooooooar";
  }
}

//Creates the child class of Gigantosaurus with variable reference to the parent class and one method. //
class Tyrannosaurus extends Gigantosaurus {
  constructor(name) {
    super(name);
  }
  growl() {
    return this.name + " says: groooooowl";
  }
}

//Creates the child class of Tyrannosaurus with variable reference to the parent of Gigantosaurus class and one method. //
class Velociraptor extends Tyrannosaurus {
  constructor(name) {
    super(name);
  }
  awk() {
    return this.name + " says: awk awk awwwwwwk";
  }
}

//This creates a new object using the class Velociraptor. //
const GetString = new Velociraptor("Blue");

/*Created a function that if correct input selected, it returns a string as an output.*/
function display() {
  //Taking in value selected on the HTML form and outputting the method based on what was selected.
  if (document.getElementById("Gigantosaurus").checked) {
    document.getElementById("output").innerHTML = GetString.roar();
  } else if (document.getElementById("Tyrannosaurus").checked) {
    document.getElementById("output").innerHTML = GetString.growl();
  } else if (document.getElementById("Velociraptor").checked) {
    document.getElementById("output").innerHTML = GetString.awk();
    //If nothing is select when clicking submit, this will send to the screen an warning message.//
  } else {
    alert("Invalid selection, please try again!");
  }
}
