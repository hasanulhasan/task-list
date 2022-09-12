let inputField = document.getElementById('inputField');
let input = inputField.value;

const addTask = () => {
  console.log(inputField.value)
  let taskList = document.getElementById('task-list');
  const divClass = document.createElement('ul');
  divClass.innerHTML = `
  <li> ${inputField.value}</li>
  `
  taskList.appendChild(divClass);
}