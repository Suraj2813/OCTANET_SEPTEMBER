document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    addTask(taskText);
    taskInput.value = '';
});

function addTask(text) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    li.textContent = text;

    // Create completed button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = ✔️';
    completeBtn.onclick = function() {
        li.classList.toggle('completed');
    };

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
