import './index.scss';
import leftMenuDiv from './views/javascripts/left-menu';
import { mainDiv, TaskList } from './views/javascripts/main';
import DefaultTask from './views/javascripts/_default-values';

const listName = 'default';
// eslint-disable-next-line
let bodyStructure = null;

const BodyStructure = () => {
  const arrElements = [];

  const header = document.createElement('header');
  arrElements.push(header);
  const leftMenu = document.createElement('div');
  leftMenu.className = 'left-menu';
  arrElements.push(leftMenu);
  const main = document.createElement('main');
  arrElements.push(main);
  const footer = document.createElement('footer');
  arrElements.push(footer);

  arrElements.forEach((element) => {
    document.body.appendChild(element);
  });

  return {
    header, leftMenu, main, footer,
  };
};

window.onload = () => {
  bodyStructure = BodyStructure();
  const tempLocal = JSON.parse(localStorage.getItem('default'));
  bodyStructure.main.id = listName;
  DefaultTask(tempLocal);
  TaskList(localStorage.getItem('lastConnection'));
  bodyStructure.leftMenu.appendChild(leftMenuDiv);
  bodyStructure.main.appendChild(mainDiv);
};
