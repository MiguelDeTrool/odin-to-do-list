import { formatDistance, subDays } from "date-fns";

//TODO
//Create project elements DONE
//Create task cards DONE
//Update according to current project DONE, mostly

const displayController = (() => {

    //Clears all content of elements passed as arguments
    const clearDisplay = (...args) => {
        for (let i = 0; i < args.length; ++i) {
            args[i].textContent = "";
        };
    };

    const addProjectDeleteButton = (element) => {
        let button = document.createElement("button");
        button.textContent = "X";
        button.classList.add("delete-project");
        element.appendChild(button);
        return element;

    };

    const createProjectElement = (projects, i) => {
        let projectObject = projects[i];

        let projectElement = document.createElement("div");
        projectElement.classList.add("project-element");

        let projectNameElement = document.createElement("div");
        projectNameElement.textContent = projectObject.title;
        projectNameElement.classList.add("project-name");
        projectElement.appendChild(projectNameElement);

        projectElement.setAttribute("data-index", i);     
        projectElement =  addProjectDeleteButton(projectElement);
        return projectElement;
    };

    const displayProjects = (projects, selectedProject, parentElement) => {
        for (let i = 0; i < projects.length; ++i) {
            let newElement = createProjectElement(projects, i);
            parentElement.appendChild(newElement);
            if (projects[i] === selectedProject) {
                newElement.classList.add("selected");
            };
        };
    };

    const addTaskDeleteButton = (element) => {
        let button = document.createElement("button");
        button.textContent = "X";
        button.classList.add("delete-task");
        element.appendChild(button);
        return element;
    };

    const createTaskCard = (tasks, i) => {
        let taskObject = tasks[i];
        let taskCard = document.createElement("div");
        taskCard.setAttribute("data-index", i);
        taskCard.classList.add("task-card");
        taskCard.classList.add(taskObject.priority);
        //TODO Add support for checklists
        let taskCardHTML = `
            <h3 class="task-title">${taskObject.title}</h3>
            <div class="task-description">${taskObject.description}</div>
            <div class="task-due-date">${taskObject.dueDate}</div>
            `;
        taskCard.innerHTML = taskCardHTML;
        taskCard = addTaskDeleteButton(taskCard);
        return taskCard;
    };

    const displayTasks = (tasks, parentElement) => {
        for (let i = 0; i < tasks.length; ++i) {
            let newElement = createTaskCard(tasks, i);
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