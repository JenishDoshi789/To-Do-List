const inputBox = document.querySelector("#input-Box");
const listContainer = document.querySelector("#list-container");
const button = document.querySelector(".button");

// function for clicking on add button
const addTask = function () {
  if (inputBox.value == "") {
    alert("You must write something");
    console.log("write ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

// Function for checking and deleting tasks
const checkTask = (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
};

button.addEventListener("click", addTask);
listContainer.addEventListener("click", checkTask, false);

// function for storing data in localstorage
const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

// function which displays saved data
const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
showTask();
