import {
  currentLanguage,
  getCurrentLanguage,
  languageForm,
} from "./translate.js";

import cross from "../assets/svg/x-white.svg";

let todoInput = document.getElementById("todo");
let todoContainer = document.querySelector(".todo");
let headerContainer = document.querySelector(".header");
//console.log(currentLanguage);

/*function getToDoListFromMemory() {
  getCurrentLanguage();
  if (localStorage.getItem("todoList")) {
    todoContainer.children = localStorage.getItem("todoList");
    console.log(todoContainer.children);
  }
}*/

//getToDoListFromMemory();

function setLanguageForInput() {
  getCurrentLanguage();
  if (currentLanguage === "ru") {
    todoInput.placeholder = "Новая задача";
    //console.log(todoContainer.children.length);
    if (todoContainer.children.length>1) {
      todoContainer.lastElementChild.textContent = "Очистить список";
    }
    
  } else if (currentLanguage === "en") {
    todoInput.placeholder = "New To Do";
    if (todoContainer.children.length>1) {
      todoContainer.lastElementChild.textContent = "Clear All";
    }
  }
}

setLanguageForInput();
languageForm.addEventListener("change", setLanguageForInput);


function addNewToDo() {
  getCurrentLanguage();
  //console.log(currentLanguage);
  let todoItemCollection = document.getElementsByName("todoItem");
  //console.log(todoItemCollection);
  //console.log(todoItemCollection.length);
  let divContainer = "";
  if (todoItemCollection.length < 1) {
    divContainer = document.createElement("div");
    divContainer.classList.add("todo_item_container");
    todoContainer.append(divContainer);
  } else {
    divContainer = document.querySelector(".todo_item_container");
  }
  let div = document.createElement("div");
  div.classList.add("todo-item");
  let input = document.createElement("input");
  let label = document.createElement("label");
  let imgCros = document.createElement("img");
  label.innerHTML = todoInput.value;
  label.htmlFor = "todoItem";
  label.classList.add("label_to_do_Item");
  input.type = "checkbox";
  (input.id = "todoItem"), (input.name = "todoItem");
  input.classList.add("input_to_do_Item");
  input.value = todoInput.value;
  imgCros.src = cross;
  imgCros.alt = "cross";
  imgCros.classList.add("cross");
  divContainer.append(div);
  div.append(input);
  div.append(label);
  div.append(imgCros);
  if (todoItemCollection.length <= 1) {
    let buttonClear = document.createElement("div");
    buttonClear.classList.add("button_clear");
    if (currentLanguage === "ru") {
      buttonClear.textContent = "Очистить список";
    } else if (currentLanguage === "en") {
      buttonClear.textContent = "Clear All";
    }
    todoContainer.append(buttonClear);
  }
  todoInput.value = "";
  //localStorage.setItem("todoList", JSON.stringify(todoContainer));
}


todoInput.addEventListener("change", addNewToDo);

function removeToDoList(event) {
  let target = event.target;
  //console.log(target);
  let inputCollection = document.querySelectorAll(".input_to_do_Item");
  let labelCollection = document.querySelectorAll(".label_to_do_Item");
  //console.log(inputCollection);
  if (target.classList.contains("button_clear")) {
    todoContainer.lastElementChild.remove();
    todoContainer.lastElementChild.remove();
  } else if (target.classList.contains("cross")) {
    let todoItemCollection = document.querySelectorAll(".todo-item");
    let divContainer = document.querySelector(".todo_item_container");
    for (let i = 0; i < todoItemCollection.length; i++) {
      //console.log(divContainer);
      //console.log(todoItemCollection[i].children[2]);
      if (todoItemCollection[i].children[2] === target) {
        todoItemCollection[i].remove();
        if (todoItemCollection.length <= 1) {
          divContainer.remove();
          todoContainer.lastElementChild.remove();
        }
      }
    }
  } else if (target.classList.contains("input_to_do_Item")) {
    for (let i = 0; i < inputCollection.length; i++) {
      //console.log(target === inputCollection[i]);
      //console.log(inputCollection[i].checked == 'true');
      //console.log(inputCollection[i].checked);
      if (target === inputCollection[i] && inputCollection[i].checked) {
        labelCollection[i].style.textDecoration = "line-through";
        labelCollection[i].style.textDecorationColor = "black";
      } else if (target === inputCollection[i] && !inputCollection[i].checked) {
        labelCollection[i].style.textDecoration = "none";
      }
    }
  } else {
    return;
  }
}

todoContainer.addEventListener("click", removeToDoList);
