import { renderTasks } from './renderTasks';
import { setToLocalStorageData } from './storage';
import { getTasksList } from './tasksGateway';
import { initTodoListHendlers } from './todoList';
import './index.scss';

const initialPage = () => {
  getTasksList().then((taskList) => {
    setToLocalStorageData('tasksList', taskList);
    renderTasks();
    initTodoListHendlers();
  });
};

document.addEventListener('DOMContentLoaded', initialPage);
