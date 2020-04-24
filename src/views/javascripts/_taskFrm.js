import {
  ValidateTaskFrm, Task, closeTaskFrm,
} from './logic';
import '../stylesheets/_taskFrm.scss';

const TaskForm = (e) => {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'task-popup';
  const subContainer = document.createElement('div');
  const frm = document.createElement('form');
  const datetimeDiv = document.createElement('div');
  datetimeDiv.className = 'date-time';
  frm.id = 'new-task';
  frm.className = 'popup-frm';

  frm.onsubmit = () => ValidateTaskFrm(e);
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
        if (key === 'priority') {
          input = document.createElement('select');
          const op1 = document.createElement('option');
          op1.value = 1;
          op1.text = 'Normal';
          const op2 = document.createElement('option');
          op2.value = 2;
          op2.text = 'Important';
          const op3 = document.createElement('option');
          op3.value = 3;
          op3.text = 'Very Important';

          input.appendChild(op1);
          input.appendChild(op2);
          input.appendChild(op3);
          input.selectedIndex = e[key] - 1;
          input.name = key;
        } else {
          input.setAttribute('type', 'text');
        }
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
  cancel.onclick = () => { closeTaskFrm(); };
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


export default TaskForm;