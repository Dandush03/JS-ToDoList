import { TaskForm } from './_taskFrm';
import '../stylesheets/main.scss';

const taskArr = localStorage;
const mainDiv = document.createElement('div');
mainDiv.id = 'mainContainer';

function timeSort(a, b) {
  a = `${a.date} ${a.time}`;
  b = `${b.date} ${b.time}`;
  a = new Date(a);
  b = new Date(b);
  if (a > b) {
    return -1;
  } if (a < b) {
    return 1;
  }
  return 0;
}

function OpenCloseContainer() {
  const { parentNode } = this.parentNode;
  let classN = parentNode.className;
  classN = classN.split(' ');
  let newClass = '';
  classN.forEach(classes => {
    if (classes === 'close') {
      newClass += 'open';
      this.innerHTML = '<i class="fas fa-chevron-down"></i>';
    } else if (classes === 'open') {
      newClass += 'close';
      this.innerHTML = '<i class="fas fa-chevron-up"></i>';
    } else {
      newClass += `${classes} `;
    }
    console.log(newClass);
  });
  parentNode.className = newClass;
}

function DeleteRow() {
  const main = document.getElementsByTagName('main')[0].id;
  const arrElm = JSON.parse(localStorage.getItem(main));
  const newArr = [];
  const { innerText } = this.parentNode.parentNode.childNodes[1].childNodes[0];

  arrElm.forEach(elm => {
    if (elm.title.toLowerCase() !== innerText.toLowerCase()) {
      newArr.push(elm);
    }
  });

  localStorage.setItem(main, JSON.stringify(newArr));
  // eslint-disable-next-line
  location.reload();
}

const TodayDates = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  today = `${mm}/${dd}/${yyyy}`;

  return { today };
};

const TaskRowCreator = (task) => {
  const row = document.createElement('div');
  row.className = 'row';

  const clm1 = document.createElement('div');
  const check = document.createElement('span');
  check.innerText = 'status';
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
  const destroyer = document.createElement('button');
  destroyer.innerHTML = '<i class="fas fa-minus"></i>';
  destroyer.onclick = DeleteRow;
  clm4.appendChild(info);
  clm4.appendChild(destroyer);

  row.appendChild(clm1);
  row.appendChild(clm2);
  row.appendChild(clm3);
  row.appendChild(clm4);

  return row;
};

const TaskList = (name) => {
  const { today } = TodayDates();
  Object.keys(taskArr).forEach(key => {
    if (key === name) {
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
        openBtn.onclick = OpenCloseContainer;
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
  });
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

const newTaskBtn = NewTaskBtn();

mainDiv.appendChild(newTaskBtn);

export { mainDiv, TaskList };
