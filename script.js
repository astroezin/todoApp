var tasks = [];

function addTask() {
    var taskTitleInput = document.getElementById('taskTitle');
    var taskDescriptionInput = document.getElementById('description');
    var taskDateInput = document.getElementById('date');
    var taskPriorityInput = document.getElementById('priority');
    var taskCategoryInput = document.getElementById('category');

    var taskTitleValue = taskTitleInput.value.trim();
    var taskDescriptionValue = taskDescriptionInput.value.trim();
    var taskDateValue = taskDateInput.value.trim();
    var taskPriorityValue = taskPriorityInput.value.trim();
    var taskCategoryValue = taskCategoryInput.value.trim();

    if (taskTitleValue !== '') {
        tasks.push({
            title: taskTitleValue,
            description: taskDescriptionValue,
            date: taskDateValue,
            priority: taskPriorityValue,
            category: taskCategoryValue,
            complete: false
        });

        // Clear input fields after adding task
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        taskDateInput.value = "";
        taskPriorityInput.value = "";
        taskCategoryInput.value = "";

        updateTodoList();
    }
}

function updateTodoList(category = '', searchText = '') {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // Clear previous list

    let filteredTasks = tasks;

    // Filter tasks by category
    if (category !== 'all' && category !== '') {
        filteredTasks = tasks.filter(task => task.category === category);
    }

    // Filter tasks by search text
    if (searchText !== '') {
        searchText = searchText.toLowerCase();
        filteredTasks = filteredTasks.filter(task =>
            task.title.toLowerCase().includes(searchText) ||
            task.category.toLowerCase().includes(searchText) ||
            task.description.toLowerCase().includes(searchText)
        );
    }

    // Display filtered tasks
    filteredTasks.forEach((task, index) => {
        var row = document.createElement('tr');

        // Create cells for task details
        var snCell = document.createElement('td');
        snCell.textContent = index + 1;
        row.appendChild(snCell);

        var titleCell = document.createElement('td');
        titleCell.textContent = task.title;
        row.appendChild(titleCell);

        var descriptionCell = document.createElement('td');
        descriptionCell.textContent = task.description;
        row.appendChild(descriptionCell);

        var dateCell = document.createElement('td');
        dateCell.textContent = task.date;
        row.appendChild(dateCell);

        var priorityCell = document.createElement('td');
        priorityCell.textContent = task.priority;
        row.appendChild(priorityCell);

        var completeCell = document.createElement('td');
        var completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.checked = task.complete;
        completeCheckbox.addEventListener('change', function () {
            toggleComplete(index);
        });
        completeCell.appendChild(completeCheckbox);
        row.appendChild(completeCell);

        var editCell = document.createElement('td');
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            editTask(index);
        });
        editCell.appendChild(editButton);
        row.appendChild(editCell);

        var deleteCell = document.createElement('td');
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteTask(index);
        });
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        todoList.appendChild(row);
    });
}


// Initial update of todo list when page loads
updateTodoList();

// Event listener for category selection
document.getElementById('showCategory').addEventListener('change', function () {
    const selectedCategory = this.value;
    const searchText = document.getElementById('searchInput').value.trim();
    updateTodoList(selectedCategory, searchText);
});

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', function () {
    const selectedCategory = document.getElementById('showCategory').value;
    const searchText = this.value.trim();
    updateTodoList(selectedCategory, searchText);
});

function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        updateTodoList();
    }
}

function editTask(index) {
    // Retrieve the task to edit
    var taskToEdit = tasks[index];

    // Populate the form fields with the task details for editing
    document.getElementById('taskTitle').value = taskToEdit.title;
    document.getElementById('description').value = taskToEdit.description;
    document.getElementById('date').value = taskToEdit.date;
    document.getElementById('priority').value = taskToEdit.priority;
    document.getElementById('category').value = taskToEdit.category;

    // Remove the task from the tasks array
    tasks.splice(index, 1);

    // Update the todo list display
    updateTodoList();
}

function updateTodoList(category = '', searchText = '') {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // Clear previous list

    let filteredTasks = tasks;

    // Filter tasks by category
    if (category !== 'all' && category !== '') {
        filteredTasks = tasks.filter(task => task.category === category);
    }

    // Filter tasks by search text
    if (searchText !== '') {
        searchText = searchText.toLowerCase();
        filteredTasks = filteredTasks.filter(task =>
            task.title.toLowerCase().includes(searchText) ||
            task.category.toLowerCase().includes(searchText) ||
            task.description.toLowerCase().includes(searchText)
        );
    }

    // Display filtered tasks
    filteredTasks.forEach((task, index) => {
        var row = document.createElement('tr');

        // Create cells for task details
        var snCell = document.createElement('td');
        snCell.textContent = index + 1;
        row.appendChild(snCell);

        var titleCell = document.createElement('td');
        titleCell.textContent = task.title;
        row.appendChild(titleCell);

        var descriptionCell = document.createElement('td');
        descriptionCell.textContent = task.description;
        row.appendChild(descriptionCell);

        var dateCell = document.createElement('td');
        dateCell.textContent = task.date;
        row.appendChild(dateCell);

        var priorityCell = document.createElement('td');
        priorityCell.textContent = task.priority;
        row.appendChild(priorityCell);

        var completeCell = document.createElement('td');
        var completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.checked = task.complete;
        completeCheckbox.addEventListener('change', function () {
            toggleComplete(index);
        });
        completeCell.appendChild(completeCheckbox);
        row.appendChild(completeCell);

        var editCell = document.createElement('td');
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            editTask(index);
        });
        editCell.appendChild(editButton);
        row.appendChild(editCell);

        var deleteCell = document.createElement('td');
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteTask(index);
        });
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        todoList.appendChild(row);
    });
}
