/*
*********************************************
Title: temp-conversion.js
Author: Jeremy Jasa
Date: 02 April 2023
Description: The JavaScript for the temp-conversion app.
**********************************************
*/

/*This function is used to convert Fahrenheit to Celsius based on what is inputted
  and displays the formatted value rounded to two spaces below*/
  function calcTemp() 
  {
  const inputVal = document.getElementById("input").value;
  let convertVal = (inputVal - 32) * 5/9;
  
  document.getElementById("output").innerHTML = convertVal.toFixed(2);
  };
  
  
  
