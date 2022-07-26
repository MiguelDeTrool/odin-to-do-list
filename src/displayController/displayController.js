//TODO
//Create project elements DONE
//Create task cards
//Update according to current project 

const displayController = (() => {

    //Clears all content of elements passed as arguments
    const clearDisplay = (...args) => {
        for (let i = 0; i < args.length; ++i) {
            args[i].textContent = "";
        };
    };

    const displayProject = (projects, selectedProject, parentElement) => {
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

    const displayTasks = (tasks, parentElement) => {
        for (let i = 0; i < tasks.length; ++i) {
            let newElement = document.createElement("div");
            //TODO define newElement innerHTML here according to task content, maybe break out into another function. Don't forget to add the index as data-index attribute to get later
            newElement.textContent = tasks[i].title;
            parentElement.appendChild(newElement);
        };
        
    };

    const refreshDisplay = (projects, selectedProject) => {
        //Define parent selectors for project and task containers here
        let projectsContainer = document.querySelector("nav");
        let tasksContainer = document.querySelector("main")
        clearDisplay(projectsContainer, tasksContainer);
        
        displayProject(projects, selectedProject, projectsContainer);
        displayTasks(selectedProject.tasks, tasksContainer);
    };

    return {
        refreshDisplay,
    };
})();

export default displayController;