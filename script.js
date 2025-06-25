const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button onclick="toggleDone(this)">✔️</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
});

function toggleDone(btn) {
  const taskItem = btn.parentElement;
  taskItem.classList.toggle("done");
}
