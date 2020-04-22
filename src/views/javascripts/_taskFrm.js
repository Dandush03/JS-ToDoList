
import '../stylesheets/_taskFrm.scss';

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

function closeFrm() {
  const main = document.getElementById('mainContainer');
  const container = document.getElementsByClassName('task-popup');
  main.removeChild(container[0]);
}

const TaskForm = (e) => {
  const ValidateFrm = () => {
    let listName = document.getElementsByTagName('main');
    listName = listName[0].id;
    const localArr = JSON.parse(localStorage.getItem(listName));
    const task = Task();

    let boolean = true;
    const frm = document.getElementById('new-task');
    const inputs = frm.querySelectorAll('input, textarea, date, time');
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

        if (name === 'date') {
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
    }
    frm.insertBefore(div, frm.childNodes[1]);
    return boolean;
  };

  const mainContainer = document.createElement('div');
  mainContainer.className = 'task-popup';
  const subContainer = document.createElement('div');
  const frm = document.createElement('form');
  const datetimeDiv = document.createElement('div');
  datetimeDiv.className = 'date-time';
  frm.id = 'new-task';
  frm.className = 'popup-frm';

  frm.onsubmit = ValidateFrm;
  const frmTitle = document.createElement('h2');
  if (e.title !== undefined) {
    frmTitle.innerText = 'Edit Task';
  } else {
    frmTitle.innerText = 'Create Task';
  }
  frm.appendChild(frmTitle);
  const content = Task();
  Object.keys(content).forEach((key) => {
    const lbl = document.createElement('label');
    lbl.htmlFor = key;
    lbl.innerHTML = key;
    let input = null;
    if (key === 'note') {
      input = document.createElement('textarea');
      input.name = key;
      if (e[key] !== undefined) {
        input.value = e[key];
      }
      input.setAttribute('row', '5');
    } else if (key === 'description') {
      input = document.createElement('textarea');
      input.name = key;
      input.className = key;
      if (e[key] !== undefined) {
        input.value = e[key];
      }
      input.setAttribute('row', '2');
    } else if (key !== 'status' && key !== 'id') {
      input = document.createElement('input');
      input.name = key;
      if (key === 'date') {
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.name = key;
        datetimeDiv.appendChild(dateInput);
        if (e[key] !== undefined) {
          let tempDate = e[key].split('/');
          tempDate = `${tempDate[2]}-${tempDate[0]}-${tempDate[1]}`;
          dateInput.value = tempDate;
        }
        input = null;
      } else if (key === 'time') {
        const timeInput = document.createElement('input');
        timeInput.setAttribute('type', 'time');
        timeInput.name = key;
        datetimeDiv.appendChild(timeInput);
        if (e[key] !== undefined) {
          const newValue = e[key].split(/[\s:]+/);
          let tempTime = null;
          if (newValue[3] === 'AM') {
            tempTime = `${newValue[0]}:${newValue[1]}`;
            timeInput.value = tempTime;
          } else {
            tempTime = `${parseInt(newValue[0], 10) + 12}:${newValue[1]}`;
            timeInput.value = tempTime;
          }
        }
        input = datetimeDiv;
        lbl.innerHTML = 'date & time';
      } else {
        if (e[key] !== undefined) {
          if (key === 'title') {
            input.disabled = true;
          }
          input.value = e[key];
        }
        input.setAttribute('type', 'text');
      }
    }
    if (input !== null) {
      frm.appendChild(lbl);
      frm.appendChild(input);
    }
  });

  const divBtn = document.createElement('div');
  divBtn.className = 'btn-container';

  const submit = document.createElement('button');
  const submitSpan = document.createElement('span');
  if (e.title !== undefined) {
    submitSpan.innerText = 'save';
  } else {
    submitSpan.innerText = 'submit';
  }
  const submitIcon = document.createElement('span');
  submitIcon.innerHTML = '<i class="far fa-save"></i>';

  submit.appendChild(submitSpan);
  submit.appendChild(submitIcon);
  divBtn.appendChild(submit);

  const cancel = document.createElement('button');
  cancel.onclick = closeFrm;
  cancel.setAttribute('type', 'button');
  const cancelSpan = document.createElement('span');
  cancelSpan.innerText = 'cancel';
  const cancelIcon = document.createElement('span');
  cancelIcon.innerHTML = '<i class="fas fa-ban"></i>';

  cancel.appendChild(cancelSpan);
  cancel.appendChild(cancelIcon);
  divBtn.appendChild(cancel);

  frm.appendChild(divBtn);
  subContainer.appendChild(frm);
  mainContainer.appendChild(subContainer);
  const append = document.getElementById('mainContainer');

  append.appendChild(mainContainer);
};

export { TaskForm, Task };