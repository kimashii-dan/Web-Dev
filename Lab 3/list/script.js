function deleteListItem(element) {
  element.parentElement.remove();
}

function addListItem() {
  let taskInput = document.getElementById("task");
  let taskMessage = taskInput.value.trim();
  if (taskMessage === "") {
    alert("You need to write the task");
    return;
  }
  let taskList = document.getElementById("task_list");

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = function () {
    completeTask(this);
  };

  let taskText = document.createElement("p");
  taskText.className = "task";
  taskText.textContent = taskMessage;

  let deleteIcon = document.createElement("img");
  deleteIcon.className = "garbage";
  deleteIcon.src = "assets/images/garbage.png";
  deleteIcon.alt = "Delete";
  deleteIcon.onclick = function () {
    deleteListItem(this);
  };

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteIcon);
  taskList.appendChild(li);

  taskInput.value = "";
}

function completeTask(checkbox) {
  let li = checkbox.parentElement;
  let p = li.querySelector(".task");

  if (checkbox.checked) {
    p.style.textDecoration = "line-through";
  } else {
    p.style.textDecoration = "none";
  }
}
