let inputField = document.getElementById('inputField');
let input = inputField.value;

const addTask = () => {

  if (inputField.value === '') {
    console.log('khali dekacce sir');
  }
  else {
    let taskList = document.getElementById('task-list');
    const divClass = document.createElement('ul');
    divClass.innerHTML = `
    <li> ${inputField.value}<img src="close.png" height="8px" width="8px"></li>`
    taskList.appendChild(divClass);
    inputField.value = ``;
  }
}
const clearAllTask = () => {
  let taskList = document.getElementById('task-list');
  taskList.innerHTML = ``;
}
