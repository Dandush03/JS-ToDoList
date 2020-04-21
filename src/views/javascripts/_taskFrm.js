import '../stylesheets/_taskFrm.scss';

const localArr = JSON.parse(localStorage.getItem('LocalTask'));

const ValidateFrm = () => {
  const frm = document.getElementById('new-task');
  const inputs = frm.querySelectorAll('input, textarea');
  let boolean = true;
  inputs.forEach(element => {
    const { value } = element;
    if (value === '') {
      boolean = false;
    }
  });

  if (boolean === true) {
    localArr.push();
  }
  return boolean;
};

const Task = () => {
  const title = null;
  const description = null;
  const date = null;
  const time = null;
  const priority = null;
  const note = null;
  const status = null;

  return {
    title, description, date, time, priority, note, status,
  };
};

const TaskForm = () => {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'task-popup';
  const subContainer = document.createElement('div');
  const frm = document.createElement('form');
  const datetimeDiv = document.createElement('div');
  datetimeDiv.className = 'date-time';
  frm.id = 'new-task';
  frm.className = 'popup-frm';
  const frmTitle = document.createElement('h2');
  frmTitle.innerText = 'Create Task';
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
      input.setAttribute('row', '5');
    } else if (key === 'description') {
      input = document.createElement('textarea');
      input.name = key;
      input.setAttribute('row', '2');
    } else if (key !== 'status') {
      input = document.createElement('input');
      input.name = key;
      if (key === 'date') {
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        datetimeDiv.appendChild(dateInput);
        input = null;
      } else if (key === 'time') {
        const timeInput = document.createElement('input');
        timeInput.setAttribute('type', 'time');
        datetimeDiv.appendChild(timeInput);
        input = datetimeDiv;
      } else {
        input.setAttribute('type', 'text');
      }
    }
    if (input !== null) {
      frm.appendChild(lbl);
      frm.appendChild(input);
    }
  });

  const submit = document.createElement('button');
  const submitSpan = document.createElement('span');
  submitSpan.innerText = 'submit';
  const submitIcon = document.createElement('span');
  submitIcon.innerHTML = '<i class="far fa-save"></i>';

  submit.appendChild(submitSpan);
  submit.appendChild(submitIcon);
  frm.appendChild(submit);

  subContainer.appendChild(frm);
  mainContainer.appendChild(subContainer);
  const append = document.getElementById('mainContainer');

  frm.onsubmit = ValidateFrm;

  append.appendChild(mainContainer);
};

export { TaskForm, Task };