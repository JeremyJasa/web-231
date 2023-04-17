/*
*********************************************
Title: sequence-game.js
Author: Jeremy Jasa
Date: 16 April 2023
Description: The JavaScript for the sequence game.
**********************************************
*/


function displaySequence()
{
    //Takes in value from the user
    const choice = document.getElementById("input").value;
    switch(choice)
    {
        //Falls into this code block if the input is "Numbers".
        case "Numbers":
            let index = 0;
            let txtNumSequence = "";
            let i = 0;
            let text = "";
            //Loops until the index equals 10
            while (index <= 10) 
            {
            txtNumSequence = txtNumSequence.concat(index,", ");
            index++;
            }
            //This takes a portion of the complied string. 
            txtNumSequence = txtNumSequence.substring(0,32);
            document.getElementById("output").innerHTML = txtNumSequence;
            break;

       //Falls into this code block if the input is "Even Numbers".
         case "Even Numbers":
            let evenNumber = 0;
            let txtEvenSequence = "";
           do
            {
                txtEvenSequence = txtEvenSequence.concat(evenNumber,", ");
                evenNumber  = evenNumber + 2 ;
            }
            while (evenNumber <= 20);
            //This takes a portion of the complied string. 
            txtEvenSequence = txtEvenSequence.substring(0,37);
            document.getElementById("output").innerHTML = txtEvenSequence;
            break;

       //Falls into this code block if the input is "odd Numbers".
         case 'Odd Numbers':
            let txtOddSequence = "";
            for(let i = 1; i < 20; i +=2)
            {
                txtOddSequence = txtOddSequence.concat(i,", ");
            }
            //This takes a portion of the complied string. 
            txtOddSequence = txtOddSequence.substring(0,33);
            document.getElementById("output").innerHTML = txtOddSequence;
            break;
        //If reaches here the input selected has not be coded for and an alert is displayed.
            default:
                alert("Invalid selection, please try again!") 
  
    }


}