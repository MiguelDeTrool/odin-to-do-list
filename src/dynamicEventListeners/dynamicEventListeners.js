import taskFormButton from "./taskFormButton.js"
import taskDeleteButtons from "./taskDeleteButtons.js"
import projectDeleteButtons from "./projectDeleteButtons.js"
import displayController from "../displayController/displayController.js";

const eventListeners = (() => {
    
    //Set listeners on document object, which facilitates adding listeners to dynamically created elements. 
    function setDynamicListener(type, selector, callback) {
        document.addEventListener(type, (e) => {
            if (e.target.matches(selector)) {
                var elements = document.querySelectorAll(selector);

                for (var i = 0; i < elements.length; i++) {
                    elements[i].addEventListener(type, callback(e));
                }
            }
        });
    };

    const addAllListeners = (projectData) => {
        //Add all event listeners to bind within this function. Add displayController refresh if the display needs refreshing after the model is updated

        //To display modal on "Add Task" button click 
        setDynamicListener("click", "#task-form-button", () => { taskFormButton.displayModal("#task-form-modal")});

        //To delete task and update display
        setDynamicListener("click", ".delete-task", (e) => { taskDeleteButtons.deleteTask(e, projectData);
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

