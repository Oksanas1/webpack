import { renderTasks } from './renderTasks';
import { createTaskInBase, getTasksList } from './tasksGateway';
import { setToLocalStorageData } from './storage';

export const renderID = () => Math.random().toString(16).slice(2);

const createTask = (text) => {
  const newTask = {
    id: renderID(),
    text,
    done: false,
    criateDate: new Date(),
    finishDate: null,
  };

  createTaskInBase(newTask)
    .then((response) => {
      if (response.ok) {
        getTasksList().then((tasks) => {
          setToLocalStorageData('tasksList', tasks);
          renderTasks();
        });
      }
    });
};

export const addTasks = () => {
  const taskInputElement = document.querySelector('.task-input');

  if (!taskInputElement.value) {
    return;
  }

  createTask(taskInputElement.value);
  taskInputElement.value = '';
};
