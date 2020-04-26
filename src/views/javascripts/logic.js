if (!localStorage.getItem('lastConnection')) {
  localStorage.setItem('lastConnection', 'default');
}

const Task = () => {
  const title = null;
  const description = null;
  const date = null;
  const time = null;
  const priority = null;
  const note = null;
  const status = null;
  const id = null;

  return {
    title, description, date, time, priority, note, status, id,
  };
};

function closeFrm(mainDiv) {
  document.body.removeChild(mainDiv);
}

function closeTaskFrm() {
  const main = document.getElementById('mainContainer');
  const container = document.getElementsByClassName('task-popup');
  main.removeChild(container[0]);
}

function validateNewFrm(errDiv, input, frm) {
  let boolean = true;
  const errMsg = document.createElement('span');
  errDiv.innerHTML = '';
  if (input.value === '') {
    errMsg.innerText = 'Name Can\'t Be Empty';
    errDiv.appendChild(errMsg);
    frm.insertBefore(errDiv, frm.childNodes[1]);
    boolean = false;
  }
  if (boolean === true) {
    localStorage.setItem(input.value, '');
    localStorage.setItem('lastConnection', input.value);
  }
  // eslint-disable-next-line
  location.reload();
  return boolean;
}

const ValidateTaskFrm = (e) => {
  let listName = document.getElementsByTagName('main');
  listName = listName[0].id;
  let localArr = [];
  if (localStorage.getItem(listName) !== '') {
    localArr = JSON.parse(localStorage.getItem(listName));
  }
  const task = Task();

  let boolean = true;
  const frm = document.getElementById('new-task');
  const inputs = frm.querySelectorAll('input, textarea, date, time, select');
  let div = document.getElementById('error-msg');

  if (div === null) {
    div = document.createElement('div');
    div.className = 'error-msg';
    div.id = 'error-msg';
  } else {
    div.innerHTML = '';
  }
  inputs.forEach(element => {
    const { value, name } = element;
    if (value === '') {
      const span = document.createElement('span');
      span.innerText = `${name} can't be empty`;
      div.appendChild(span);
      boolean = false;
    } else {
      task[name] = value;
      if (name === 'priority') {
        task[name] = value;
      } else if (name === 'date') {
        const newValue = value.split('-');
        task[name] = `${newValue[1]}/${newValue[2]}/${newValue[0]}`;
      } else if (name === 'time') {
        const newValue = value.split(':');
        if (newValue[0] === '00') {
          task[name] = `${12}:${newValue[1]}:00 AM`;
        } else if (newValue[0] === '12') {
          task[name] = `${12}:${newValue[1]}:00 PM`;
        } else if (newValue[0] < 12) {
          task[name] = `${newValue[0]}:${newValue[1]}:00 AM`;
        } else if (newValue[0] > 12) {
          task[name] = `${newValue[0] - 12}:${newValue[1]}:00 PM`;
        }
      }
    }
  });

  if (e.id === undefined) {
    task.id = localArr.length;
  } else {
    task.id = e.id;
  }

  if (boolean === true) {
    if (task.id === e.id) {
      localArr.forEach((element, index) => {
        if (element.id === task.id) {
          localArr[index] = task;
        }
      });
    } else {
      localArr.push(task);
    }
    localStorage.setItem(listName, JSON.stringify(localArr));
  } else {
    frm.insertBefore(div, frm.childNodes[1]);
  }
  return boolean;
};

const changeSelection = () => {
  const menu = document.getElementsByClassName('menu-link');
  Object.keys(menu).forEach(key => {
    menu[key].className = 'menu-link';
    if (menu[key].innerText.toLowerCase() === localStorage.getItem('lastConnection').toLowerCase()) {
      menu[key].className += ' selected';
    }
  });
};

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

function openCloseContainer() {
  const { parentNode } = this.parentNode;
  let classN = parentNode.className;
  classN = classN.split(' ');
  let newClass = '';
  classN.forEach(classes => {
    if (classes === 'close') {
      newClass += 'open';
      this.innerHTML = '<i class="fas fa-chevron-up"></i>';
    } else if (classes === 'open') {
      newClass += 'close';
      this.innerHTML = '<i class="fas fa-chevron-down"></i>';
    } else {
      newClass += `${classes} `;
    }
  });
  parentNode.className = newClass;
}

function deleteRow() {
  const main = document.getElementsByTagName('main')[0].id;
  const arrElm = JSON.parse(localStorage.getItem(main));
  const newArr = [];
  const { innerText } = this.parentNode.parentNode.childNodes[1];
  let counter = 0;
  arrElm.forEach(elm => {
    if (elm.id !== Number(innerText)) {
      elm.id = counter;
      newArr.push(elm);
      counter += 1;
    }
  });

  localStorage.setItem(main, JSON.stringify(newArr));
  // eslint-disable-next-line
  location.reload();
}

const TodayDates = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = `${mm}/${dd}/${yyyy}`;

  return { today };
};

function checkStatus(e) {
  let listName = document.getElementsByTagName('main');
  const container = e.target.parentNode.parentNode;
  const currentId = container.childNodes[1].innerText;
  listName = listName[0].id;
  const newArr = [];
  const oldArr = JSON.parse(localStorage.getItem(listName));
  oldArr.forEach(obj => {
    if (currentId === obj.id || Number(currentId) === obj.id) {
      if (e.target.checked === true) {
        e.target.parentNode.parentNode.className += ' completed';
        obj.status = 1;
      } else {
        const classes = e.target.parentNode.parentNode.className.split(' ');
        let newClasses = '';
        classes.forEach(c => {
          if (c !== 'completed') {
            newClasses += `${c} `;
          }
        });
        container.className = newClasses;
        obj.status = 0;
      }
    }
    newArr.push(obj);
  });
  localStorage.setItem(listName, JSON.stringify(newArr));
}

function setTask(task, check, row) {
  if (task.status === 1 || task.status === '1') {
    check.checked = true;
    row.className += ' completed';
  }
  if (task.priority === 2 || Number(task.priority) === 2) {
    row.className += ' important';
  }
  if (task.priority === 3 || Number(task.priority) === 3) {
    row.className += ' very-important';
  }
}

export {
  validateNewFrm, closeFrm, ValidateTaskFrm, Task, closeTaskFrm,
  changeSelection, timeSort, openCloseContainer, deleteRow,
  TodayDates, checkStatus, setTask,
};