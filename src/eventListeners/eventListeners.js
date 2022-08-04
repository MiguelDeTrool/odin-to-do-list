import taskFormButton from "./taskFormButton.js"
import taskDeleteButtons from "./taskDeleteButtons.js"

const eventListeners = (() => {

    //Use this function to set listeners on document object, which facilitates adding listeners to dynamically created elements
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
        //To display modal on "Add Task" button click 
        setDynamicListener("click", "#task-form-button", () => { taskFormButton.displayModal("#task-form-modal")});
        setDynamicListener("click", ".delete-task", (e) => { taskDeleteButtons.deleteTask(e, projectData)});
    };

    return {
        addAllListeners,
    };
})();

export default eventListeners;

