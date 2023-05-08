// const form = document.querySelector('form');
// const taskList = document.querySelector('.task-list');
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// const saveTasks = () => {
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// const renderTasks = () => {
//   taskList.innerHTML = '';
//   tasks.forEach((task, index) => {
//     const taskEl = document.createElement('li');
//     taskEl.classList.add('task');
//     taskEl.innerHTML = `
//       <input type="checkbox" ${task.completed ? 'checked' : ''}>
//       <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
//       <button class="delete-button">X</button>
//       <input type="datetime-local" class="reminder" value="${task.reminder || ''}">
//     `;
//     taskList.appendChild(taskEl);
//   });
// }

// form.addEventListener('submit', event => {
//   event.preventDefault(); // prevent form submission

//   const input = form.querySelector('input[type="text"]');
//   const taskText = input.value.trim();

//   if (taskText) {
//     const task = {
//       text: taskText,
//       completed: false,
//       reminder: ''
//     };
//     tasks.push(task);
//     saveTasks();
//     renderTasks();

//     input.value = '';
//   }
// });

// taskList.addEventListener('click', event => {
//   const taskEl = event.target.closest('li.task');
//   if (taskEl) {
//     const checkbox = taskEl.querySelector('input[type="checkbox"]');
//     if (event.target === checkbox) {
//       const index = tasks.findIndex(task => task.text === taskEl.querySelector('.task-text').innerText);
//       tasks[index].completed = checkbox.checked;
//       saveTasks();
//       renderTasks();
//     } else {
//       const deleteButton = taskEl.querySelector('.delete-button');
//       if (event.target === deleteButton) {
//         const index = tasks.findIndex(task => task.text === taskEl.querySelector('.task-text').innerText);
//         tasks.splice(index, 1);
//         saveTasks();
//         renderTasks();
//       }
//     }
//   }
// });

// taskList.addEventListener('change', event => {
//   const taskEl = event.target.closest('li.task');
//   if (taskEl) {
//     const reminderInput = taskEl.querySelector('.reminder');
//     if (event.target === reminderInput) {
//       const index = tasks.findIndex(task => task.text === taskEl.querySelector('.task-text').innerText);
//       tasks[index].reminder = reminderInput.value;
//       saveTasks();
//     }
//   }
// });

// renderTasks();




















// SIRVE PERO NO FUNCIONA EL POPUP


// const form = document.querySelector('form');
// const taskList = document.querySelector('.task-list');
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// const saveTasks = () => {
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// const renderTasks = () => {
//   taskList.innerHTML = '';
//   tasks.forEach((task, index) => {
//     const taskEl = document.createElement('li');
//     taskEl.classList.add('task');
//     taskEl.innerHTML = `
//       <input type="checkbox" ${task.completed ? 'checked' : ''}>
//       <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
//       <button class="delete-button">X</button>
//       <input type="datetime-local" class="reminder" value="${task.reminder || ''}">
//     `;
//     taskList.appendChild(taskEl);
//   });
// }

// const playSound = () => {
//   const audio = new Audio('/sound.mp3');
//   audio.play();
// }

// form.addEventListener('submit', event => {
//   event.preventDefault(); // prevent form submission

//   const input = form.querySelector('input[type="text"]');
//   const taskText = input.value.trim();

//   if (taskText) {
//     const task = {
//       text: taskText,
//       completed: false,
//       reminder: ''
//     };
//     tasks.push(task);
//     saveTasks();
//     renderTasks();

//     input.value = '';
//   }
// });

// taskList.addEventListener('click', event => {
//   const taskEl = event.target.closest('li.task');
//   if (taskEl) {
//     const checkbox = taskEl.querySelector('input[type="checkbox"]');
//     if (event.target === checkbox) {
//       const index = tasks.findIndex(task => task.text === taskEl.querySelector('.task-text').innerText);
//       tasks[index].completed = checkbox.checked;
//       saveTasks();
//       renderTasks();
//     } else {
//       const deleteButton = taskEl.querySelector('.delete-button');
//       if (event.target === deleteButton) {
//         const index = tasks.findIndex(task => task.text === taskEl.querySelector('.task-text').innerText);
//         tasks.splice(index, 1);
//         saveTasks();
//         renderTasks();
//       }
//     }
//   }
// });

// taskList.addEventListener('change', event => {
//   const taskEl = event.target.closest('li.task');
//   if (taskEl) {
//     const reminderInput = taskEl.querySelector('.reminder');
//     if (event.target === reminderInput) {
//       const index = tasks.findIndex(task => task.text === taskEl.querySelector('.task-text').innerText);
//       tasks[index].reminder = reminderInput.value;
//       saveTasks();
//     }
//   }
// });

// renderTasks();





















// POPUP WORKING HERE simple pero funciona, no importa el background.js aca



// const form = document.querySelector('form');
// const taskList = document.querySelector('.task-list');

// form.addEventListener('submit', event => {
//   event.preventDefault(); // prevent form submission

//   const input = form.querySelector('input[type="text"]');
//   const taskText = input.value.trim();

//   if (taskText) {
//     const task = document.createElement('li');
//     task.classList.add('task');
//     task.innerHTML = `
//       <input type="checkbox">
//       <span class="task-text">${taskText}</span>
//       <button class="delete-button">X</button>
//       <input type="datetime-local" class="reminder">
//     `;
//     taskList.appendChild(task);

//     input.value = '';
//   }
// });

// taskList.addEventListener('click', event => {
//   const task = event.target.closest('li.task');
//   if (task) {
//     const checkbox = task.querySelector('input[type="checkbox"]');
//     if (event.target === checkbox) {
//       task.classList.toggle('completed');
//     } else {
//       const deleteButton = task.querySelector('.delete-button');
//       if (event.target === deleteButton) {
//         task.remove();
//       }
//     }
//   }
// });

// taskList.addEventListener('change', event => {
//   const task = event.target.closest('li.task');
//   if (task) {
//     const reminderInput = task.querySelector('.reminder');
//     if (event.target === reminderInput) {
//       const reminderTime = new Date(reminderInput.value).getTime();
//       if (reminderTime) {
//         const currentTime = new Date().getTime();
//         const timeUntilReminder = reminderTime - currentTime;
//         if (timeUntilReminder > 0) {
//           setTimeout(() => {
//             const reminder = document.createElement('div');
//             reminder.classList.add('reminder');
//             reminder.innerText = `Reminder: ${task.querySelector('.task-text').innerText}`;
//             task.appendChild(reminder);
//             alert(`Reminder: ${task.querySelector('.task-text').innerText}`);
//           }, timeUntilReminder);
//         }
//       } else {
//         const reminder = task.querySelector('.reminder');
//         if (reminder) {
//           reminder.remove();
//         }
//       }
//     }
//   }
// });


























// Testeo nuevo  a ver 


const form = document.querySelector('form');
const taskList = document.querySelector('.task-list');

const loadTasks = () => {
  chrome.storage.local.get('tasks', ({ tasks }) => {
    taskList.innerHTML = ''; // clear the taskList element
    if (tasks) {
      tasks.forEach(task => {
        const li = createTaskElement(task);
        taskList.appendChild(li);
      });
    }
  });
}

const saveTasks = tasks => {
  const savedTasks = tasks.map(({ id, reminder }) => ({ id, reminder }));
  chrome.storage.local.set({ tasks: savedTasks });
}

const addTask = task => {
  const li = createTaskElement(task);
  taskList.appendChild(li);
  saveTasks(getTasks().concat(task));
}

const deleteTask = li => {
  li.remove();
  saveTasks(getTasks().filter(task => task.id !== li.dataset.id));
}

const toggleCompleted = li => {
  li.classList.toggle('completed');
  const tasks = getTasks();
  const task = tasks.find(task => task.id === li.dataset.id);
  task.completed = !task.completed;
  saveTasks(tasks);
}

const createTaskElement = task => {
  const li = document.createElement('li');
  li.classList.add('task');
  li.dataset.id = task.id;
  li.innerHTML = `
    <input type="checkbox"${task.completed ? ' checked' : ''}>
    <span class="task-text">${task.text}</span>
    <button class="delete-button">X</button>
    <input type="datetime-local" class="reminder" value="${task.reminder}">
  `;
  return li;
}

const getTasks = () => {
  const tasks = [];
  const taskElements = document.querySelectorAll('.task');
  taskElements.forEach(taskElement => {
    const task = {
      id: taskElement.dataset.id,
      text: taskElement.querySelector('.task-text').innerText,
      completed: taskElement.querySelector('input[type="checkbox"]').checked,
      reminder: taskElement.querySelector('.reminder').value
    };
    tasks.push(task);
  });
  return tasks;
}

const checkReminders = () => {
  chrome.storage.local.get('tasks', ({ tasks }) => {
    tasks.forEach(task => {
      const reminderTime = new Date(task.reminder).getTime();
      if (reminderTime && reminderTime <= new Date().getTime()) {
        chrome.notifications.create({
          type: 'basic',
          title: 'Todo Reminder',
          message: task.text
        }, () => {
          alert(`Reminder: ${task.text}`);
        });
      }
    });
  });
}

loadTasks();

form.addEventListener('submit', event => {
  event.preventDefault(); // prevent form submission

  const input = form.querySelector('input[type="text"]');
  const taskText = input.value.trim();

  if (taskText) {
    const task = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
      reminder: ''
    };
    addTask(task);

    input.value = '';
  }
});

taskList.addEventListener('click', event => {
  const taskElement = event.target.closest('li.task');
  if (taskElement) {
    const checkbox = taskElement.querySelector('input[type="checkbox"]');
    if (event.target === checkbox) {
      toggleCompleted(taskElement);
    } else {
      const deleteButton = taskElement.querySelector('.delete-button');
      if (event.target === deleteButton) {
        deleteTask(taskElement);
      }
    }
  }
});

taskList.addEventListener('change', event => {
  const taskElement = event.target.closest('li.task');
  if (taskElement) {
    const reminderInput = taskElement.querySelector('.reminder');
    if (event.target === reminderInput) {
      const reminderTime = new Date(reminderInput.value).getTime();
      if (reminderTime) {
        const currentTime = new Date().getTime();
        const timeUntilReminder = reminderTime - currentTime;
        if (timeUntilReminder > 0) {
          setTimeout(() => {
            chrome.notifications.create({
              type: 'basic',
              title: 'Todo Reminder',
              message: taskElement.querySelector('.task-text').innerText
            }, () => {
              alert(`Reminder: ${taskElement.querySelector('.task-text').innerText}`);
            });
          }, timeUntilReminder);
        }
      }
    }
    const tasks = getTasks();
    const task = tasks.find(task => task.id === taskElement.dataset.id);
    task.reminder = reminderInput.value;
    saveTasks(tasks);
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'checkReminders') {
    checkReminders();
  }
});

chrome.runtime.sendMessage({ type: 'popupOpen' });