import Task from "../Task/Task.js"

class Project {
    title;
    tasks = [];

    constructor(title) {
        this.title = title;
    };

    addTask(title, type, description, dueDate, priority) {
        this.tasks.push(new Task(title, type, description, dueDate, priority));
    };

    removeTask(index) {
        this.tasks.splice(index, 1);
    };
};

export default Project;