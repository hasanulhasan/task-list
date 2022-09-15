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

let searchField = document.getElementById('searchField');
searchField.addEventListener('keyup', function (e) {
  let searchValue = e.target.value.toLowerCase();
  console.log(searchValue);

  document.querySelectorAll('li').forEach(task => {
    let item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(searchValue) != -1) {
      task.style.display = 'block'
    }
    else {
      task.style.display = 'none'
    }
  })
})