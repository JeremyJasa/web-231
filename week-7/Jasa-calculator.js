/*
*********************************************
Title: calculator.js
Author: Jeremy Jasa
Date: 30 April 2023
Description: The JavaScript for the calculator.
**********************************************
*/
/*This evaluates the inputs and computes the results.*/
function multiply(InputOne, InputTwo)
{
    if (!Number.isInteger(InputOne) || !Number.isInteger(InputTwo))
    {
        throw "Error: inputs must be numbers";
    }
    if(Number.isNaN(InputOne) || Number.isNaN(InputTwo))
    {
        throw "Error: inputs must be numbers";
    }
    return (InputOne * InputTwo);
}
/*This evaluates the inputs and computes the results.*/
function divide(InputOne, InputTwo)
{
    if (!Number.isInteger(InputOne) || !Number.isInteger(InputTwo))
    {
        throw "Error: inputs must be numbers";
    }
    if(Number.isNaN(InputOne) || Number.isNaN(InputTwo))
    {
        throw "Error: inputs must be numbers";

    }
    if(!Number.isFinite(InputOne/InputTwo))
    {
        throw "Error: cannot divide by zero";
    }
    return (InputOne / InputTwo);

}
/*This takes in the inputs and displays the results.*/
function displayMultiplyResults()
{
    
MultiOne = parseFloat(document.getElementById("MultiOne").value);
MultiTwo = parseFloat(document.getElementById("MultiTwo").value);

try {
    const sum = multiply(MultiOne, MultiTwo);

    document.getElementById("Multiplyoutput").innerHTML =  MultiOne + " * " + MultiTwo + " = " + sum; 
    
} catch (error) {
    alert(error)
}

}
/*This takes in the inputs and displays the results.*/
function displayDivideResults()
{

DivideOne  = parseFloat(document.getElementById("DivideOne").value);
DivideTwo  = parseFloat(document.getElementById("DivideTwo").value);

try {
    const sum = divide(DivideOne, DivideTwo);

    document.getElementById("Divideoutput").innerHTML =  DivideOne + " / " + DivideTwo + " = " + sum; 
    
} catch (error) {
    alert(error)
}


}