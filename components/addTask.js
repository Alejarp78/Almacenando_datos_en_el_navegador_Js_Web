import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
  };



  const createTask = (evento) => {
    evento.preventDefault();
    //const taskList = [];
    //const taskList = localStorage.getItem('tasks')  || [];
    // Recupera la lista de tareas desde localStorage y convierte la cadena en un arreglo
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(taskList);
    const input = document.querySelector('[data-form-input]');
    const calendar  = document.querySelector('[data-form-date]');
    const values = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    console.log(dateFormat);
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');
  
    const taskObj = {
      values,
      dateFormat,
    };
  
    taskList.push(taskObj);
  
    localStorage.setItem('tasks', JSON.stringify(taskList));
  
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = values;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
    console.log(dateElement);
    // task.innerHTML = content;
  
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
  
    return task;
  };

