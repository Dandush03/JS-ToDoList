import TaskForm from './_taskFrm';
import {
  timeSort, openCloseContainer, setTask,
  deleteRow, TodayDates, checkStatus,
} from './logic';
import '../stylesheets/main.scss';


const taskArr = localStorage;
const mainDiv = document.createElement('div');
mainDiv.id = 'mainContainer';

const TaskRowCreator = (task) => {
  const row = document.createElement('div');
  row.className = 'row';

  const id = document.createElement('label');
  id.innerText = task.id;
  id.style.display = 'none';

  const clm1 = document.createElement('div');
  const check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  setTask(task, check, row);
  check.onchange = (e) => checkStatus(e);
  clm1.appendChild(check);

  const clm2 = document.createElement('div');
  clm2.className = 'title-desc';
  const title = document.createElement('span');
  title.innerText = task.title;
  const description = document.createElement('span');
  description.innerText = task.description;
  clm2.appendChild(title);
  clm2.appendChild(description);

  const clm3 = document.createElement('div');
  const time = document.createElement('span');
  time.innerText = task.time;
  clm3.appendChild(time);

  const clm4 = document.createElement('div');
  const info = document.createElement('button');
  info.innerHTML = '<i class="fas fa-info"></i>';
  info.setAttribute('type', 'button');
  info.onclick = () => {
    const main = document.getElementsByTagName('main')[0].id;
    const arrElm = JSON.parse(localStorage.getItem(main));
    const { innerText } = row.childNodes[1];
    arrElm.forEach(elm => {
      if (elm.id === innerText || elm.id === Number(innerText)) {
        TaskForm(elm);
      }
    });
  };
  const destroyer = document.createElement('button');
  destroyer.innerHTML = '<i class="fas fa-minus"></i>';
  destroyer.onclick = deleteRow;
  clm4.appendChild(info);
  clm4.appendChild(destroyer);

  row.appendChild(clm1);
  row.appendChild(id);
  row.appendChild(clm2);
  row.appendChild(clm3);
  row.appendChild(clm4);

  return row;
};

const NewTaskBtn = () => {
  const btn = document.createElement('button');
  btn.className = 'create-task';
  btn.innerHTML = '';
  const span = document.createElement('span');
  span.innerText = 'New Task';
  const icon = document.createElement('span');
  icon.innerHTML = '<i class="fas fa-plus"></i>';

  btn.appendChild(span);
  btn.appendChild(icon);
  btn.onclick = TaskForm;

  return btn;
};

const TaskList = (name) => {
  localStorage.setItem('lastConnection', name);
  const main = document.body.getElementsByTagName('main')[0];
  main.id = name;
  const { today } = TodayDates();
  Object.keys(taskArr).forEach(key => {
    if (key === name) {
      mainDiv.innerHTML = '';
      if (taskArr[key].length !== 0) {
        const tasks = JSON.parse(taskArr[key]).sort(timeSort);

        const GroupByDate = tasks.reduce((taskGroups, task) => {
          const { date } = task;
          if (!taskGroups[date]) {
            taskGroups[date] = [];
          }
          taskGroups[date].push(task);
          return taskGroups;
        }, {});

        Object.keys(GroupByDate).forEach(elem => {
          const tasks = GroupByDate[elem];
          const div = document.createElement('div');
          const titleDiv = document.createElement('div');
          titleDiv.className = 'group-title';
          const span = document.createElement('span');
          const openBtn = document.createElement('button');
          openBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
          openBtn.onclick = openCloseContainer;
          titleDiv.appendChild(span);
          titleDiv.appendChild(openBtn);
          div.appendChild(titleDiv);

          Object.keys(tasks).forEach((task) => {
            span.innerText = tasks[task].date;
            div.appendChild(TaskRowCreator(tasks[task]));
          });

          if (span.innerText === today) {
            span.innerText = 'Today';
            div.className = 'task-container present open';
          } else if (span.innerText < today) {
            div.className = 'task-container past close';
          } else {
            div.className = 'task-container future close';
          }
          mainDiv.insertBefore(div, mainDiv.childNodes[0]);
        });
      }
    }
  });
  const newTaskBtn = NewTaskBtn();

  mainDiv.appendChild(newTaskBtn);
};

export { mainDiv, TaskList };
