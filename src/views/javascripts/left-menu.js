import '../stylesheets/left-menu.scss';
import { TaskList } from './main';
import CreateFrm from './_newListFrm';


const changeSelection = () => {
  const menu = document.getElementsByClassName('menu-link');
  Object.keys(menu).forEach(key => {
    menu[key].className = 'menu-link';
    if (menu[key].innerText.toLowerCase() === localStorage.getItem('lastConnection').toLowerCase()) {
      menu[key].className += ' selected';
    }
  });
};

const leftMenuDiv = document.createElement('div');
const CreateMenu = () => {
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logo';
  const logoH2 = document.createElement('h2');
  logoH2.innerText = 'ToDoList';
  logoDiv.appendChild(logoH2);
  leftMenuDiv.appendChild(logoDiv);

  const ul = document.createElement('ul');
  ul.className = 'menu';

  Object.keys(localStorage).forEach(key => {
    if (key !== 'lastConnection') {
      const li = document.createElement('li');
      li.className = 'menu-item';
      const a = document.createElement('a');
      a.className = 'menu-link';
      if (localStorage.getItem('lastConnection') === key) {
        a.className += ' selected';
      }
      a.innerText = key;
      a.href = '#';
      a.onclick = () => { TaskList(key); changeSelection(); };

      li.appendChild(a);
      ul.appendChild(li);
    }
  });

  leftMenuDiv.appendChild(ul);

  const btnContainer = document.createElement('div');
  btnContainer.className = 'new-list-btn';
  const btn = document.createElement('button');
  btn.innerHTML = '';
  const span = document.createElement('span');
  span.innerText = 'New List';
  const icon = document.createElement('span');
  icon.innerHTML = '<i class="fas fa-plus"></i>';
  btn.appendChild(span);
  btn.appendChild(icon);
  btn.onclick = CreateFrm;
  btnContainer.appendChild(btn);
  leftMenuDiv.appendChild(btnContainer);
};

CreateMenu();
export default leftMenuDiv;
