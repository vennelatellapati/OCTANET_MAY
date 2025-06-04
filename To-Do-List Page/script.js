const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏';
  editBtn.onclick = () => editTask(span);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

function editTask(span) {
  const updatedText = prompt("Edit your task:", span.textContent);
  if (updatedText !== null && updatedText.trim() !== "") {
    span.textContent = updatedText.trim();
  }
}