import { Task } from './_taskFrm';

const arrayList = [];

const Main = () => {
  const Task1 = () => {
    const defaultTask = Task();
    Object.keys(defaultTask).forEach((key) => {
      switch (key) {
        case 'title': {
          defaultTask[key] = 'First Task';
          break;
        }
        case 'description': {
          defaultTask[key] = 'This is the first Description';
          break;
        }
        case 'date': {
          defaultTask[key] = '04/21/2020';
          break;
        }
        case 'time': {
          defaultTask[key] = '01:20:00 AM';
          break;
        }
        case 'priority': {
          defaultTask[key] = '1';
          break;
        }
        case 'status': {
          defaultTask[key] = '1';
          break;
        }
        default:
          defaultTask[key] = 'This is the first Note';
      }
    });
    arrayList.push(defaultTask);
  };

  const Task2 = () => {
    const defaultTask = Task();
    Object.keys(defaultTask).forEach((key) => {
      switch (key) {
        case 'title': {
          defaultTask[key] = 'Second Task';
          break;
        }
        case 'description': {
          defaultTask[key] = 'This is the first Description';
          break;
        }
        case 'date': {
          defaultTask[key] = '03/05/2020';
          break;
        }
        case 'time': {
          defaultTask[key] = '02:20:00 AM';
          break;
        }
        case 'priority': {
          defaultTask[key] = '1';
          break;
        }
        case 'status': {
          defaultTask[key] = '1';
          break;
        }
        default:
          defaultTask[key] = 'This is the first Note';
      }
    });
    arrayList.push(defaultTask);
    localStorage.setItem('default', JSON.stringify(defaultTask));
  };

  const Task3 = () => {
    const defaultTask = Task();
    Object.keys(defaultTask).forEach((key) => {
      switch (key) {
        case 'title': {
          defaultTask[key] = 'Third Task';
          break;
        }
        case 'description': {
          defaultTask[key] = 'This is the first Description';
          break;
        }
        case 'date': {
          defaultTask[key] = '10/10/2020';
          break;
        }
        case 'time': {
          defaultTask[key] = '01:20:00 AM';
          break;
        }
        case 'priority': {
          defaultTask[key] = '1';
          break;
        }
        case 'status': {
          defaultTask[key] = '1';
          break;
        }
        default:
          defaultTask[key] = 'This is the first Note';
      }
    });
    arrayList.push(defaultTask);
  };

  return { Task1, Task2, Task3 };
};


const DefaultTask = () => {
  const main = Main();
  Object.values(main).map((v) => {
    if (typeof v === 'function') {
      v.call();
    }
    return null;
  });
  // console.log(arrayList);
  localStorage.setItem('default', JSON.stringify(arrayList));
};

export default DefaultTask;