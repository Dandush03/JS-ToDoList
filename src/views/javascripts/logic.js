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
  timeSort, deleteRow, Task,
  TodayDates, setTask,
};
