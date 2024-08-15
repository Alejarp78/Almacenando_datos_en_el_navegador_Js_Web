import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates } from "./services/date.js";


export const readTasks = () => {
    const list = document.querySelector('[data-list]');
    //console.log(list);

    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList);
    //orderDates(dates);
    //console.log(tasksList);
    //console.log(dates);

    dates.forEach(date => {
        //console.log(date);
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));
        tasksList.forEach(( task ) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            //console.log(diff);
            if (diff === 0) {
                list.appendChild(createTask(task));
            };
            //list.appendChild(dateElement(task.dateFormat));
        });
    });

    //console.log(dateElement("13/08/2024"));



};