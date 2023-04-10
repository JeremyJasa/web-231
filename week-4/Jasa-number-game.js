/*
*********************************************
Title: number-game.js
Author: Jeremy Jasa
Date: 09 April 2023
Description: The JavaScript for the number guessing game.
**********************************************
*/

//Creates a random values and compares with input from user to determine is the they are less, greater or equal.
function chkGuess()
{
    /* Source: Professor Krasso
    Definition: Call the Instructor provided Math.random() function and assign it to a const variable named rnd. */
   // Generates a random number between 1 and 10
   const rnd = Math.floor((Math.random() * 10) + 1) 
   // Variables are set to output message as results in the HTML
   const msgLessThan ="The number is less than"
   const msgGreaterThan = "The number is greater than"
   const msgCongrats = "Congratulations! You picked the correct number!"

   // Setting value to input from user
   const guess = document.getElementById("input").value;

    //if statement determines is inputted number is less greater than concludes equal
    if (rnd < guess)
    document.getElementById("output").innerHTML = ` ${msgLessThan} ${guess} `
    else if (rnd > guess)
    document.getElementById("output").innerHTML = `${msgGreaterThan} ${guess} `
    else
    document.getElementById("output").innerHTML = msgCongrats;
}

