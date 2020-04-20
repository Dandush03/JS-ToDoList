import './index.scss';

// eslint-disable-next-line
let bodyStructure = null;


/** Crete the body structure */
const BodyStructure = () => {
  const arrElements = [];

  const header = document.createElement('header');
  header.innerText = 'header';
  arrElements.push(header);
  const leftMenu = document.createElement('div');
  leftMenu.className = 'left-menu';
  leftMenu.innerText = 'Menu';
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

  return { header, main, footer };
};


window.onload = () => {
  bodyStructure = BodyStructure();
};
