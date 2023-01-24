"use strict"

/* Please make the following changes to the HTML file while
 navigating the DOM.
 Create a variable that holds the <li> element with the class
 “start-here”. Use traverse methods to complete these tasks:*/


 //1. Change the text from “title 2” to “main title”
const changeTitle = document.querySelector('.start-here');
changeTitle.innerText = 'main title';

const newTitle = document.getElementsByClassName('start-here');
newTitle[0].innerText = "main title";

// 2. Add another subtitle with the text “subtitle 4”
const newSubTitUL = document.querySelector('ul ul');
const newSubTitLI = document.createElement('li');
newSubTitLI.innerText = 'sub title 4';
newSubTitUL.appendChild(newSubTitLI);

// 3. Delete the last <li> element from the list.
const deleteLI = document.querySelectorAll('ul li');
deleteLI[deleteLI.length-1].remove();

// 4. Change the <title> element text to “Master Of The Dom”.
const updateTitle = document.querySelector('title');
updateTitle.textContent = 'Master Of The Dom';

// 5. Change the text of the <p> element to something else of yours
const updatePEl = document.querySelector('p');
updatePEl.innerText = 'This task was a pain in... and only mostly because of (stubborn) technical issues';