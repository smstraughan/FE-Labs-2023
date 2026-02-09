/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript CRUD Operations with JQuery
  FE Lab Week 12
*/

/* ----------------------------------------------------- */
// Key Term List:
// JSON server
// JSON
// CRUD (Create, Read, Update, Delete)
// HTTP Verbs: GET, PUT/PATCH, POST, DELETE
// REST API
// naming conventions
// kebab-case
// SNAKE_CASE
// PascalCase
// camelCase

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 * BEFORE YOU START:
 * You should be working in a folder containing 3 files: db.json, index.html, and week12Lab.js.
 *
 * The db.json should be an object. That object contains one key:value pair.
 * an object called "studentRoster" that is an array of objects with multiple
 * key:value pairs: "fullName", "researchAssignment", and "id".
 *
 * Your index.html has been set up with CDN's to use Jquery & Bootstrap.
 * Removing/changing any <script> or <link> elements may affect functionality.
 *
 * Do not change these or the data inside the db.json until you have completed
 * the project and/or feel comfortable changing them.
 *
 * GOAL: We are teaching a class of x number of students.
 *       For homework, we're assigning each student to research an animal.
 *
 *       We have an API endpoint: studentRoster
 *       The info is also in your db.json
 *
 *       1) Create a form that will GET/PUT/POST/DELETE to/from our studentRoster
 *       2) Create a section that displays our students name research assignment
 *
 *          This can be a table, a div, however you'd like to show the info.
 *          For this Lab, we'll be using a table.
 *
 *       You should be able to PUT(update)/DELETE(delete) existing students
 *           & POST(add) new students to the roster.
 *
 * Note: This lab uses Jquery/ajax for all CRUD operations.
 */

/*------------------------ Part 1: Setting up a JSON server ------------------------*/
console.log(`-------------------------- 
Part 1: Setup your JSON server`)

/**
 * Documentation: https://www.npmjs.com/package/json-server#getting-started
 *
 * Step 1: In your console, type: npm install -g json-server
 *
 * Step 2: In your console, type: json-server --watch db.json
 *         Your console should look something like this:
 *
 *         Resources
 *         http://localhost:3000/studentRoster
 *
 *         Above is the URL we'll use for our CRUD operations.
 *
 * Step 3: Below, create a const declaration for your URL endpoint
 *
 * ↓ YOUR CODE HERE ↓ */



/*------------------------ Part 2: HTTP Verb: GET ------------------------*/
console.log(
  `-------------------------- 
Part 2: GET and displaying the information`
)

/**
 * Step 1: Use $.get(api_url_here).then(data => console.log(data)) to check if
 *         our GET is set up correctly. You should be logging an array of objects.
 *
 * Step 2: Instead of logging, loop over data and add your information to the DOM.
 *
 *         Reminder: While you are not required to, the lab solution uses a <table>
 *
 * ↓ YOUR CODE HERE ↓ */
const URL = 'http://localhost:3000/studentRoster'

async function fetchStudentData() {
  const response = await fetch(URL)
  const data = await response.json()

  data.forEach(student => {
    //create a table row for each student
    const row = `
    <tr>
      <td>${student.fullName}</td>
      <td>${student.researchAssignment}</td>
      <td>${student.id}</td>
      <td>
        <button class="edit-btn">Edit</button>
      </td>
      <td>
        <button class="delete-btn">Delete</button>
      </td>
    </tr>;
    //Append to table body`
    $('tbody').append(row);
  });

  return data;

}

fetchStudentData()


/*------------------------ Part 3: HTTP Verb: POST ------------------------*/
console.log(
  `-------------------------- 
Part 3: POST and adding new students`
)

/**
 * Step 1: Create a form in our HTML to post including
 *         label/inputs for each new student and a button to submit.
 *
 * Step 2: Add an event listener in your code below to the <button> element
 *         you created to log 'pls work' on click, just to make sure it's working.
 *
 * Step 3:
 * Docs:   https://api.jquery.com/jquery.post/
 *
 *         Replace the console.log('pls work') with jQuery's $.post() method.
 *
 *         The first argument is a URL, the second argument is an object containing
 *         the data to pass in. Use jquery to target the inputElement.val() of our form.
 *
 *         Your button should now post a new user on click.
 *
 * ↓ YOUR CODE HERE ↓ */

async function submitNewStudent(event) {
  event.preventDefault(); // Stop form from reloading page
  
  const URL = 'http://localhost:3000/studentRoster';
  
  // Create the new student object
  const newStudent = {
    fullName: document.getElementById('name').value,
    researchAssignment: document.getElementById('animal').value
  };
  
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newStudent)
    });
    
    const data = await response.json(); // Server returns the new student with ID
    
    // Add the new row to the table
    const row = `
    <tr>
      <td>${data.fullName}</td>
      <td>${data.researchAssignment}</td>
      <td>${data.id}</td>
      <td>
        <button class="edit-btn">Edit</button>
      </td>
      <td>
        <button class="delete-btn">Delete</button>
      </td>
    </tr>`;
    
    document.querySelector('tbody').insertAdjacentHTML('beforeend', row);
    
    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('animal').value = '';
    
  } catch (error) {
    console.error('Error submitting student:', error);
  }
}

// Attach to form submit event
document.querySelector('form').addEventListener('submit', submitNewStudent);


/*
$('#submit').click(function () {
  event.preventDefault();

  $.post(endURL,{
    fullName: $('#name').val(),
    researchAssignment: $('#animal').val()
  }).then(data => {
    console.log('Posted successfully:', data);
  });
})
*/


/*------------------------ Part 4: HTTP Verb: DELETE ------------------------*/
console.log(
  `-------------------------- 
Part 4: DELETE and deleting individual students`
)

/**
 * Docs:   https://api.jquery.com/jquery.ajax/
 *
 * Step 1: Create a new <td> element: a delete button for every student in part 2.
 *
 *         <button>delete</button>
 *
 *         Here's a lil' ASCII trash bin: 🗑
 *
 * Step 2: Let's handle deleting a little bit differently from post.
 *
 *         On the button element we just added, give it a property of onclick=""
 *         Inside the "", we're going to give it function to do.
 *
 * Step 3: Create a function called "deleteUser" below, that takes in an id as a parameter.
 *         Inside the code block, we're going to use jquery/ajax to delete a user.
 *
 * Step 4: Add the deleteUser() function inside our
 *         onclick="" on the delete button.
 *
 *         Make sure you are passing in the correct ID to deleteUser() above,
 *         and you have added the ID to the end of the ajax URL in the deleteUser() function.
 *
 *         Your elements should now be getting deleted!
 *
 * ↓ YOUR CODE HERE ↓ */
/*
// Add event listener to the tbody (event delegation)
document.querySelector('tbody').addEventListener('click', async function(event) {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains('delete-btn')) {
    
    // Get the row that contains the button
    const row = event.target.closest('tr');
    
    // Get the student ID from the row (it's in the 3rd <td>)
    const studentId = row.children[2].textContent;
    
    const URL = `http://localhost:3000/studentRoster/${studentId}`;
    
    try {
      const response = await fetch(URL, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        // Remove the row from the DOM
        row.remove();
        console.log('Student deleted successfully');
      }
      
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  }
});
*/
/*------------------------ HTTP Verb: UPDATE ------------------------*/
console.log(
  `-------------------------- 
Part 4: PUT and updating the information`
)

/**
 * Step 1: Create a function called updateUser(){}
 *
 * Step 2: Create a form in our HTML to update a student's name/assignment by id.
 *         We need labels/input elements for id/studentName/researchAssignment.
 *
 * Step 3: Add a new header for students ID id in our table.
 * Step 4: Set up $.ajax() for 'PUT'
 *         We need two key/value pairs: method and data
 *
 *         Get the new id/name/research assignment by id, and pass those values
 *         into the appropriate places.
 *
 * Step 5: Add an event listener after your updateUser() function to
 *         do the updateUser function on click.
 *
 * ↓ YOUR CODE HERE ↓ */

// Add to your tbody click event listener (alongside delete logic)
document.querySelector('tbody').addEventListener('click', async function(event) {
  
  // DELETE BUTTON (your existing code)
  if (event.target.classList.contains('delete-btn')) {
     const row = event.target.closest('tr');
    
    // Get the student ID from the row (it's in the 3rd <td>)
    const studentId = row.children[2].textContent;
    
    const URL = `http://localhost:3000/studentRoster/${studentId}`;
    
    try {
      const response = await fetch(URL, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        // Remove the row from the DOM
        row.remove();
        console.log('Student deleted successfully');
      }
      
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  }
  
  // EDIT BUTTON
  if (event.target.classList.contains('edit-btn')) {
    const row = event.target.closest('tr');
    const studentId = row.children[2].textContent;
    const currentName = row.children[0].textContent;
    const currentAnimal = row.children[1].textContent;
    
    // Replace table cells with input fields
    row.children[0].innerHTML = `<input type="text" value="${currentName}" class="edit-name">`;
    row.children[1].innerHTML = `<input type="text" value="${currentAnimal}" class="edit-animal">`;
    
    // Change Edit button to Save button
    event.target.textContent = 'Save';
    event.target.classList.remove('edit-btn');
    event.target.classList.add('save-btn');
  }
  
  // SAVE BUTTON
  if (event.target.classList.contains('save-btn')) {
    const row = event.target.closest('tr');
    const studentId = row.children[2].textContent;
    
    // Get the new values from inputs
    const newName = row.querySelector('.edit-name').value;
    const newAnimal = row.querySelector('.edit-animal').value;
    
    const URL = `http://localhost:3000/studentRoster/${studentId}`;
    
    try {
      const response = await fetch(URL, {
        method: 'PUT',  // or 'PATCH'
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          fullName: newName,
          researchAssignment: newAnimal
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Replace inputs with updated text
        row.children[0].textContent = data.fullName;
        row.children[1].textContent = data.researchAssignment;
        
        // Change Save button back to Edit button
        event.target.textContent = 'Edit';
        event.target.classList.remove('save-btn');
        event.target.classList.add('edit-btn');
      }
      
    } catch (error) {
      console.error('Error updating student:', error);
    }
  }
});

/*
How it works:

Edit button clicked → Converts text to input fields, button changes to "Save"
Save button clicked → Sends PUT request, updates server, converts inputs back to text
Uses PUT method to update the entire student object
*/

console.log(`-----------Finished------------`)

/*------------------------ Optional: Style it with bootstrap! ------------------------*/

/**
 * Tables: https://getbootstrap.com/docs/5.3/content/tables/#overview
 * Forms: https://getbootstrap.com/docs/5.3/forms/overview/#overview
 *
 * There's no right or wrong here. Play around with different styles/reorganization.
 *
 * If you want some 'above and beyond' ideas:
 * 1) Instead of a table, look into organizing the students differently with bootstrap:
 *      Card, Accordion, Dropdowns, Popover, Tooltips
 *      Do a list group, and every item inside is one of the above
 * 3) Redo the update form - open the update form in a bootstrap modal when you click on
 *    a student, pass in the students id/name/assignment automatically to the form so the
 *    user can make edits to a form thats not initially blank.
 * 4) Re-style the delete button ASCII character to something more "modern"
 *
 */
