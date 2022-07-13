"use strict";

// initiate variables
const todoForm = document.getElementById('todo-form');
const listItem = document.getElementById('list-item');
const todoInput = document.getElementById('todo-input');


// add todo
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    addTodo();
})


// validate input   
function addTodo () {
    if (todoInput != "") {
        // creating new element & adding input value to it
        let newTodo = document.createElement("LI");
        newTodo.appendChild(document.createTextNode(todoInput.value));
        newTodo.style.cssText = "color: white; background-color: gray; width: 50%; margin: 10px 10px;  padding: 10px; border-radius: 50px;";
        

        //adding li to ul
        listItem.appendChild(newTodo);


        //Reset input box
        todoInput.value = "";

        //Delete li on click
        newTodo.onclick = function() {
            this.parentNode.removeChild(this);
        }

    } else {
        // display msg when input is empty
        console.log('input cannot be empty')
    }
}













