class Project {
    title;
    tasks = [];

    constructor(title) {
        this.title = title;
    };

    addTask(newTask) {
        this.tasks.push(newTask);
    };

    removeTask(index) {
        this.tasks.slice(index, 1);
    }
};

export default Project;