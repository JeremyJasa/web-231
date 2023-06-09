/*
*********************************************
Title: 
Author: Jeremy Jasa
Date: 25 March 2023
Description:
**********************************************
*/
// This section declares variables and assigns values for EmployeeOne.
const recordOneEmployeeLastname = "Ludwig";
const recordOneEmployeeFirstname = "Beethoven";
const recordOneEmployeeAddress = "505 main street";
const recordOneEmployeeHireDate = new Date().toLocaleDateString('en-US');
const recordOneEmployeePay = 18.901.toFixed(1);
// This section declares variables and assigns values for EmployeeTwo
const recordTwoEmployeeLastname = "Johann";
const recordTwoEmployeeFirstname = "Bach";
const recordTwoEmployeeAddress = "512 main street";
const recordTwoEmployeeHireDate = new Date().toLocaleDateString('en-US');
const recordTwoEmployeePay = 25.501.toFixed(1);
// This section declares variables and assigns values for EmployeeThree
const recordThreeEmployeeLastname = "Wolfgang";
const recordThreeEmployeeFirstname = "Mozart";
const recordThreeEmployeeAddress = "600 main street";
const recordThreeEmployeeHireDate = new Date().toLocaleDateString('en-US');
const recordThreeEmployeePay = 50.101.toFixed(1);

// This section sets values in the HTML for EmployeeOne.
document.getElementById("ER1A").innerHTML = recordOneEmployeeLastname;
document.getElementById("ER1B").innerHTML = recordOneEmployeeFirstname;
document.getElementById("ER1C").innerHTML = recordOneEmployeeAddress;
document.getElementById("ER1D").innerHTML = recordOneEmployeeHireDate;
document.getElementById("ER1E").innerHTML = recordOneEmployeePay;
// This section sets values in the HTML for Employeetwo.
document.getElementById("ER2A").innerHTML = recordTwoEmployeeLastname;
document.getElementById("ER2B").innerHTML = recordTwoEmployeeFirstname;
document.getElementById("ER2C").innerHTML = recordTwoEmployeeAddress;
document.getElementById("ER2D").innerHTML = recordTwoEmployeeHireDate;
document.getElementById("ER2E").innerHTML = recordTwoEmployeePay;
// This section sets values in the HTML for Employeethree.
document.getElementById("ER3A").innerHTML = recordThreeEmployeeLastname;
document.getElementById("ER3B").innerHTML = recordThreeEmployeeFirstname;
document.getElementById("ER3C").innerHTML = recordThreeEmployeeAddress;
document.getElementById("ER3D").innerHTML = recordThreeEmployeeHireDate;
document.getElementById("ER3E").innerHTML = recordThreeEmployeePay;




