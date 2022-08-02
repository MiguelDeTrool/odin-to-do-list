import { formatDistance, subDays } from 'date-fns'


//TODO
//Create project elements DONE
//Create task cards
//Update according to current project DONE, mostly

const displayController = (() => {

    //Clears all content of elements passed as arguments
    const clearDisplay = (...args) => {
        for (let i = 0; i < args.length; ++i) {
            args[i].textContent = "";
        };
    };

    const displayProjects = (projects, selectedProject, parentElement) => {
        for (let i = 0; i < projects.length; ++i) {
            let newElement = document.createElement("div");
            newElement.textContent = projects[i].title;
            //TODO add index as data-attribute to retrieve later
            parentElement.appendChild(newElement);
            if (projects[i] === selectedProject) {
                newElement.classList.add("selected");
            };
        };
    };

    const createTaskCard = (taskObject, i) => {
        let taskCard = document.createElement("div");
        taskCard.setAttribute.dataIndex = i;
        taskCard.classList.add = "task-card";
        taskCard.classList.add = taskObject.priority;
        //TODO Add support for checklists
        let taskCardHTML = `
            <h3 class="task-title">${taskObject.title}</h3>
            <div class="task-description">${taskObject.description}</div>
            <div class="task-due-date">${taskObject.dueDate}</div>
            `;
        taskCard.innerHTML = taskCardHTML;
        return taskCard;
    };

    const displayTasks = (tasks, parentElement) => {
        for (let i = 0; i < tasks.length; ++i) {
            let newElement = createTaskCard(tasks[i], i);
            parentElement.appendChild(newElement);
        };
        
    };

    const refreshDisplay = (dataObject) => {
        //Get projects and selected project from the passed object
        let projects = dataObject.projects;
        let selectedProject = dataObject.selectedProject;

        //Define parent selectors for project and task containers here
        let projectsContainer = document.querySelector("#projects-container");
        let tasksContainer = document.querySelector("#tasks-container");

        clearDisplay(projectsContainer, tasksContainer);
        
        displayProjects(projects, selectedProject, projectsContainer);
        displayTasks(selectedProject.tasks, tasksContainer);
    };

    return {
        refreshDisplay,
    };
})();

export default displayController;