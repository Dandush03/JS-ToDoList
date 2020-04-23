import '../stylesheets/_taskFrm.scss';

const CreateFrm = () => {
  const mainDiv = document.createElement('div');

  function closeFrm() {
    document.body.removeChild(mainDiv);
  }

  const subDiv = document.createElement('div');
  mainDiv.className = 'task-popup';
  const frm = document.createElement('form');

  const h2 = document.createElement('h2');
  h2.innerText = 'New List Creator';

  const lbl = document.createElement('label');
  lbl.innerText = 'Name';
  const input = document.createElement('input');

  const divBtn = document.createElement('div');
  divBtn.className = 'btn-container';

  const submit = document.createElement('button');
  const submitSpan = document.createElement('span');
  submitSpan.innerText = 'submit';
  const submitIcon = document.createElement('span');
  submitIcon.innerHTML = '<i class="far fa-save"></i>';

  submit.appendChild(submitSpan);
  submit.appendChild(submitIcon);

  const cancel = document.createElement('button');
  cancel.onclick = closeFrm;
  cancel.setAttribute('type', 'button');
  const cancelSpan = document.createElement('span');
  cancelSpan.innerText = 'cancel';
  const cancelIcon = document.createElement('span');
  cancelIcon.innerHTML = '<i class="fas fa-ban"></i>';

  cancel.appendChild(cancelSpan);
  cancel.appendChild(cancelIcon);

  divBtn.appendChild(submit);
  divBtn.appendChild(cancel);

  frm.appendChild(h2);
  frm.appendChild(lbl);
  frm.appendChild(input);
  frm.appendChild(divBtn);

  subDiv.appendChild(frm);
  mainDiv.appendChild(subDiv);
  document.body.appendChild(mainDiv);
};

export default CreateFrm;