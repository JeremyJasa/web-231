/*
*********************************************
Title: in-n-out-books.js
Author: Jeremy Jasa
Date: 07 May 2023
Description: The JavaScript for the in-n-out-books app.
**********************************************
*/

/*Created and initialize object literal with properties for isbn, title, and pages.*/
const book_One = 
{
isbn: "0345391802",
title:"The Hitchhiker's Guide to the Galaxy",
pages:224
};

/*Created and initialize object literal with properties for isbn, title, and pages.*/
const book_Two = 
{
isbn:"9780743273565",
title:"The Great Gatsby",
pages: 180
}

/*Created and initialize object literal with properties for isbn, title, and pages.*/
const book_Three = 
{
isbn:"9780679722762",
title:"Ulysses",
pages:783 
}

/*Created and initialize object literal with properties for name and genre.*/
const author_One =
{
name:"James Joyce",
genre:"Modernist avant-garde"
}

/*Created and initialize object literal with properties for name and genre.*/
const author_Two =
{
name:"F. Scott Fitzgerald",
genre:"Tragedy"
}

/*Created and initialize object literal with properties for name and genre.*/
const author_Three =
{
name:"Douglas Adams",
genre:"Science fiction"
}

/*Created a function that if correct input selected, it returns a HTML table as output.*/
function display()
{   
    //Taking in value selected on the HTML form.
    const choice = document.getElementById("input").value;
    switch(choice)
    {
    //Falls into this code block if the input is "Top 3 Favorite Books".
    case "Top 3 Favorite Books":
    
    //This builds concatenated string builds the header row for the outputted results.
        tblBooks = `
        <h3>Books Listing</h3>
        <table>
          <thead>
            <tr>
              <th>ISBN</th><th>Title</th><th>Pages</th>
            </tr>
          </thead>
          <tbody>
      `
    //This builds concatenated string with the properties within the initialize object literals.
    tblBooks += 
    `<tr>
    <td>${book_One.isbn}</td><td>${book_One.title}</td><td>${book_One.pages} </td>
    </tr>`
    tblBooks += 
    `<tr>
    <td>${book_Two.isbn}</td><td>${book_Two.title}</td><td>${book_Two.pages}</td>
    </tr>`
    tblBooks +=
    `<tr>
    <td>${book_Three.isbn}</td><td>${book_Three.title}</td><td>${book_Three.pages}</td>
    </tr>`

    //This builds concatenated string builds the footer row for the outputted results.    
    tblBooks += `</tbody></table>`
          
    //Assigns outputted table to the HTML. 
        document.getElementById("output").innerHTML = tblBooks;
        break;
  
   //Falls into this code block if the input is "Top 3 Favorite Authors".
    case "Top 3 Favorite Authors":
  
    //This builds concatenated string builds the header row for the outputted results.
    tblAuthors = 
        `<h3>Authors Listing</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Genre</th>
            </tr>
          </thead>
          <tbody>`
    
    //This builds concatenated string with the properties within the initialize object literals.
        tblAuthors += 
        `<tr>
            <td>${author_One.name}</td><td>${author_One.genre}
          </tr>`
        tblAuthors += 
        `<tr>
            <td>${author_Two.name}</td><td>${author_Two.genre}
        </tr>`
        tblAuthors += 
        `<tr>
            <td>${author_Three.name}</td><td>${author_Three.genre}
        </tr>`
    
        //This builds concatenated string builds the footer row for the outputted results.           
      tblAuthors += `</tbody></table>`
    
      //Assigns outputted table to the HTML. 
        document.getElementById("output").innerHTML = tblAuthors;
        break;

     //Falls into this code block if no input is selected.
        default:
            alert("Invalid selection, please try again!") 

    }
}