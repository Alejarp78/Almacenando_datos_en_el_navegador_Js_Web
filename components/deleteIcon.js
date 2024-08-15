import { readTasks } from "./readTasks.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
/*   const parent = event.target.parentElement;
  parent.remove(); */
  //console.log("id", id);
  const li = document.querySelector('[data-list]');
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id === id);
  const newTasks = tasks.splice(index, 1);
  li.innerHTML = "";
  console.log(newTasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  readTasks();
  //tasks.splice(id, 1);
  //console.log(tasks);
};

export default deleteIcon;
