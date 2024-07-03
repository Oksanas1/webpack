import { addTasks } from './createTask';
import { onHandlerTask } from './updateTasks';

export const initTodoListHendlers = () => {
  const createBtnElemnt = document.querySelector('.create-task-btn');
  createBtnElemnt.addEventListener('click', addTasks);

  const checkboxListItemElement = document.querySelector('.list');
  checkboxListItemElement.addEventListener('click', onHandlerTask);
};
