let todoArray = [];
const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const cancelTaskButton = document.getElementById("cancel-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

// Challenge: Try and using your addTaskButton with a "keydown" eventlistener
// and create a way to use the enter key to submit a new list item.
addTaskButton.addEventListener("click", (e) => {
  e.preventDefault(); // This prevents the page from reloading.
  // start by setting a variable named todo to equal localstorage.getitem("todo")
  // Add code below this line
  let todo = localStorage.getItem("todo");
  console.log(todo);

  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  // check if todo is null, if it is set todoArray = []
  // else set todoArray to JSON.parse() your variable passed into the parse method.
  console.log(text.value);
  if (text.value === "") {
    alert("Input is empty!");
    return;
  }
  // console.log(text.value);
  // check if text.value is empty, alert that the input is empty and return
  todoArray.push(text.value);
  console.log(todoArray);
  text.value = "";
  console.log(text.value);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
  // now that you've parsed the value, push the text.value to the todoArray.
  // set the text.value to an empty string.
  // get the localstorage method and use the setItem and pass in todo
  // and pass in JSON.stringify(todoArray).
  // lastly call display todo method
});

// Add code below this comment to do the following:
// 1. when the page loads, call displayTodo() method
onload = displayTodo();
// This method is already in place for you.
function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
          <p class='w-full text-white font-bold'>${list}</p>
          <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 rounded text-white text-grey bg-green-600'>Edit</button>
          <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white bg-red-500'>Delete</button>
       </div>`;
  });
  listBox.innerHTML = htmlCode;
}

// call the todo and let it equal localstorage.getitem("todo")
// assign the todoArray equal to JSON.parse(todo)
// use the todoArray and use the splice method on the ind and pass in 1 as well.
// set the todo in local storage and use the JSON.stringify(todoArray)
// call the display todo method

function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  console.log(todoArray);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
}

// set the saveInd.value equal to the ind
// call the todo and let it equal localstorage.getitem("todo")
// assign the todoArray equal to JSON.parse(todo)
// assign the text.value to the array and get the index [ind].
// set the addTaskButton display to none
// set the saveTaskButton display to block

function edit(ind) {
  saveInd.value = ind;
  console.log(saveInd.value);
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  text.value = todoArray[ind];
  console.log(ind);
  addTaskButton.style.display = "none";
  saveTaskButton.style.display = "block";
  cancelTaskButton.style.display = "block";
}

// this is the challenge for this project
// you'll follow a similar pattern above and do the following different:
// 1. let id be the same as your saveInd.value
// 2. switch the add and save displays to block and none respectively.
// 3. set text value to empty
// 4. and use the localstorage method setItem, pass in todo and stringify the array.
// 5. display todo method called.

cancelTaskButton.addEventListener("click", () => {
  text.value = "";
  addTaskButton.style.display = "block";
  saveTaskButton.style.display = "none";
  cancelTaskButton.style.display = "none";
});

saveTaskButton.addEventListener("click", () => {
  let ind = saveInd.value;
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  console.log(todoArray);
  if (text.value === "") {
    alert("Input is empty!");
    return;
  }
  todoArray.splice([ind], 1, text.value);
  console.log(todoArray);
  text.value = "";
  console.log(text.value);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  addTaskButton.style.display = "block";
  saveTaskButton.style.display = "none";
  cancelTaskButton.style.display = "none";
  displayTodo();
});
