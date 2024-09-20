const addButton = document.querySelector('.input-tasks button');
const taskInput = document.querySelector('.input-tasks input');
const taskContainer = document.querySelector('.add-tasks');
const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === '')
        return;
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');
    taskDiv.innerHTML = `
    <div class="task">
      <input type="checkbox" class="task-checkbox" />
      <label contenteditable="false">${taskText}</label>
    </div>
    <div class="task-button">
      <button class="edit-btn"><img src="/assets/edit.png" alt="Edit"></button>
      <button class="delete-btn"><img src="/assets/delete.png" alt="Delete"></button>
    </div>
  `;
    taskContainer.appendChild(taskDiv);
    taskContainer.style.display = 'flex';
    taskInput.value = '';
    const checkbox = taskDiv.querySelector('.task-checkbox');
    const label = taskDiv.querySelector('label');
    checkbox.addEventListener('change', () => {
        label.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });
    const editButton = taskDiv.querySelector('.edit-btn');
    const imgElement = editButton.querySelector('img');
    editButton.addEventListener('click', () => {
        const isEditable = label.getAttribute('contenteditable') === 'true';
        if (isEditable) {
            label.setAttribute('contenteditable', 'false');
            imgElement.src = '/assets/edit.png';
        }
        else {
            label.setAttribute('contenteditable', 'true');
            label.focus();
            imgElement.src = '/assets/edit.png';
        }
    });
    const deleteButton = taskDiv.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        taskContainer.removeChild(taskDiv);
        if (taskContainer.children.length === 0) {
            taskContainer.style.display = 'none';
        }
    });
};
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
export {};
