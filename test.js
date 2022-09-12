let inputField = document.getElementById('inputField');
const addTask = () => {
  if (inputField.value === '') {
    alert('Enter a Task');
  }
  else {
    let taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `${inputField.value}<img src="close.png" height="8px" width="8px">`
    taskList.appendChild(li);
    inputField.value = ``;
  }
}
const clearAllTask = () => {
  let taskList = document.getElementById('task-list');
  taskList.innerHTML = ``;
}

let taskLists = document.getElementById('task-list');
taskLists.addEventListener('click', function (e) {
  if (e.target.hasAttribute('src')) {
    taskLists.removeChild(e.target.parentElement);
  }
})
