import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { readTasks } from './readTasks.js';


export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar  = document.querySelector('[data-form-date]');
    const values = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    if (values === ""  || date === "") {
      return 
    };
    //const taskList = [];
    //const taskList = localStorage.getItem('tasks')  || [];
    // Recupera la lista de tareas desde localStorage y convierte la cadena en un arreglo
    //console.log(taskList);

    input.value = '';
    calendar.value = '';

    const complete = false;

    const taskObj = {
        values,
        dateFormat,
        complete,
        id: uuid.v4(),
    };

    list.innerHTML = '';

    //taskList.push(taskObj);
  
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    //console.log(dateFormat);

    readTasks();
/* 
    const task = createTask(taskObj);
    list.appendChild(task); */
  };

  export const createTask = ({values, dateFormat, complete, id}) => {
    const task = document.createElement('li');
    task.classList.add('card');
    //backticks
    const taskContent = document.createElement('div');

    console.log(complete);

    const check = checkComplete(id);

    if (complete) {
      console.log("Completada");
      check.classList.toggle('fas');
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    };

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = values;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
    // task.innerHTML = content;

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));
  
    return task;
  };

