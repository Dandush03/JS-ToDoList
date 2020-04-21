import './index.scss';
import leftMenuDiv from './views/javascripts/left-menu';
import { mainDiv, TaskList } from './views/javascripts/main';
import DefaultTask from './views/javascripts/_default-values';


// eslint-disable-next-line
let bodyStructure = null;


/** Crete the body structure */
const BodyStructure = () => {
  const arrElements = [];

  const header = document.createElement('header');
  header.innerText = 'header';
  arrElements.push(header);
  const leftMenu = document.createElement('div');
  leftMenu.className = 'left-leftMenu';
  leftMenu.innerText = 'leftMenu';
  arrElements.push(leftMenu);
  const main = document.createElement('main');
  main.innerText = 'main';
  arrElements.push(main);
  const footer = document.createElement('footer');
  footer.innerText = 'footer';
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
  if (tempLocal === null) {
    DefaultTask();
  }
  TaskList('default');
  // console.log(tempLocal);
  localStorage.removeItem('default');
  bodyStructure.leftMenu.appendChild(leftMenuDiv);
  bodyStructure.main.appendChild(mainDiv);
};
