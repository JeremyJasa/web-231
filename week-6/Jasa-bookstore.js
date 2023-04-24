/*
*********************************************
Title: bookstore.js
Author: Jeremy Jasa
Date: 23 April 2023
Description: The JavaScript for the bookstore game.
**********************************************
*/
 
const books = ["The Hitchhiker's Guide to the Galaxy","The Great Gatsby","Ulysses"];
const authors= ["F. Scott Fitzgerald","James Joyce","William Shakespeare"];
const publishers = ["Simon & Schuster", "HarperCollins", "Penguin Random House"];
authors.sort();
publishers.sort();
publishers.reverse();

/* This displays a table in the results section of the HTML.*/
function display()
{

const choice = document.getElementById("input").value;
switch(choice)
{
    //Falls into this code block if the input is "Top 3 Favorite Books".
    case "Top 3 Favorite Books":
        tblBooks = `
        <h3>Books Listing</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
      `
    //This builds concatenated string the rows within the array.
      for (const book of books) {
        tblBooks += `
          <tr>
            <td>${book}</td>
          </tr>`
      }
      tblBooks += `</tbody></table>`
        document.getElementById("output").innerHTML = tblBooks;
        break;
    //Falls into this code block if the input is "Top 3 Favorite Authors".
    case "Top 3 Favorite Authors":
        tblAuthors = 
        `<h3>Authors Listing</h3>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>`
    //This builds concatenated string the rows within the array.
      for (const author of authors) {
        tblAuthors += 
        `<tr>
            <td>${author}</td>
          </tr>`
      }
      tblAuthors += `</tbody></table>`
        document.getElementById("output").innerHTML = tblAuthors;
        break;
    //Falls into this code block if the input is "Top 3 Favorite Publishers".
        case "Top 3 Favorite Publishers":
            tblPublishers = 
            `<h3>Publishers Listing</h3>
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>`
    //This builds concatenated string the rows within the array.
          for (const publisher of publishers) {
            tblPublishers += 
            `<tr>
                <td>${publisher}</td>
              </tr>`
          }
          tblPublishers += `</tbody></table>`
            document.getElementById("output").innerHTML = tblPublishers;
        break;

        default:
            alert("Invalid selection, please try again!") 

    }


}
