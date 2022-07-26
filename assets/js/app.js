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
        newTodo.style.cssText = "color: white; background-color: green; margin: 20px 0;  padding: 10px; border-radius: 10px;";
        

        //adding li to ul
        listItem.appendChild(newTodo);



        // cross todo
        // const completedBtn = document.createElement('input');
        //     completedBtn.type = "button";
        //     completedBtn.value = "Completed";
        //     completedBtn.onclick = function() { // Added the onclick function
        //     clickComplete(this);
        // };
        

        // del completed items
        // let clickComplete = (todoInput) => {
        //     document.getElementById('completed') = appendChild(todoInput.parentNode)
        //     todoInput.remove() // removes the completed button
        // }


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


    











