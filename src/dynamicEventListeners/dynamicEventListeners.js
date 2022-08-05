import taskFormButton from "./taskFormButton.js"
import taskDeleteButtons from "./taskDeleteButtons.js"

import projectSelector from "./projectSelector.js"
import projectDeleteButtons from "./projectDeleteButtons.js"
import newProjectButton from "./newProjectButton.js"
import projectName from "./projectName.js"


import displayController from "../displayController/displayController.js";

const eventListeners = (() => {
    
    //Set listeners on document object, which facilitates adding listeners to dynamically created elements. 
    function setDynamicListener(type, selector, callback, options = {}, useCapture = false) {
        document.addEventListener(type, (e) => {
            if (e.target.matches(selector)) {
                let elements = document.querySelectorAll(selector);

                for (let i = 0; i < elements.length; i++) {
                    elements[i].addEventListener(type, callback(e));
                };
            };
        },
        options,
        useCapture);
    };

    const addAllListeners = (projectData) => {
        //Add all event listeners within this function. Add displayController refresh if the display needs refreshing after the model is updated

        //To display modal on "Add Task" button click 
        setDynamicListener("click", "#task-form-button", () => { taskFormButton.displayModal("#task-form-modal")});

        //To delete task and update display
        setDynamicListener("click", ".delete-task", (e) => { taskDeleteButtons.deleteTask(e, projectData);
        displayController.refreshDisplay(projectData);
        });


        //To select a project 
        setDynamicListener("click", ".project-element", (e) => {
            projectSelector.selectProject(e, projectData);
            displayController.refreshDisplay(projectData);
        });

        //To add a project, and immediately show name input
        setDynamicListener("click", "#new-project-button", (e) => {
            newProjectButton.addProject(e, projectData);
            displayController.refreshDisplay(projectData);
            projectName.newProjectNameInput(projectData);
        });

        //To show existing project name input
        setDynamicListener("dblclick", ".project-name", (e) => {
            projectSelector.selectProject(e, projectData);
            projectName.changeProjectNameInput(e);
        });

        //To confirm the new name
        setDynamicListener("click", ".project-name-confirm", (e) => {
        projectSelector.selectProject(e, projectData);
        projectName.confirmProjectName(e, projectData);
        displayController.refreshDisplay(projectData);
        });

        //To delete project and update display
        setDynamicListener("click", ".delete-project", (e) => {
            projectDeleteButtons.deleteProject(e, projectData);
            displayController.refreshDisplay(projectData);
        });
    };

    return {
        addAllListeners,
    };
})();

export default eventListeners;

