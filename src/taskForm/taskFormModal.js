import projectData from "../projectData/projectData";
import "./task-form-modal.scss"

//TODO

//Add listener to close modal button ---> Can't select cancel button before it is created...
//Add listener to submit modal button
//Maybe add clear form button

const modal = (() => {
    let modalContent = `
        <form action="javascript:void(0)">

            <input type="text" id="title">
            <label for="title">Title</label>

            <div>
                <input type="radio" name="type" id="text" value="text">
                <label for="high">Text</label>
            </div>
            <div>
                <input type="radio" name="type" id="checklist" value="checklist">
                <label for="normal">Checklist</label>
            </div>

            <input type="textarea" id="description">
            <label for="description"></label>

            <input type="datetime" id="due-date">
            <label for="due-date"></label>

            <div>
                <input type="radio" name="priority" id="high" value="3">
                <label for="high">High</label>
            </div>
            <div>
                <input type="radio" name="priority" id="normal" value="2">
                <label for="normal">Normal</label>
            </div>
            <div>
                <input type="radio" name="priority" id="low" value="1"">
                <label for="low">Low</label>
            </div>


            <button type="button" class="cancel-button">Cancel</button>
            <button type="button" class="clear-button">Clear</button>
            <button type="submit" class="task-add-button">Add Task</button>
        </form>
        `;

    const addTask = (e) => {
        e.preventDefault(); //This may be redundant because the form's action is javascript:void(0)

        //Define form so it's easier to access its elements
        let taskAddForm = document.querySelector("#task-form-modal>form");

        //Get selected project to know which project to add the task to
        let currentProject = projectData.selectedProject;

        //Set all arguments from the form info, then clear them
        let title = taskAddForm.title.value;
        let type = taskAddForm.type.value;
        let description = taskAddForm.description.value;
        let dueDate = taskAddForm.dueDate.value;
        let priority = taskAddForm.priority.value;

        taskAddForm.reset();

        //Add task with arguments to project 
        currentProject.addTask(new Task(title, type, description, dueDate, priority));
        
        //Maybe hide modal as well, and refresh the display
    };

    const clearFields = () => {
        let taskAddForm = document.querySelector("#task-form-modal>form");
        taskAddForm.reset();
    };

    const addButtonFunctions = (self) => {
        //Select the buttons, or in the case of the form, the form itself, since we use the "submit" event
        let cancelButton = document.querySelector(".cancel-button");
        let clearButton = document.querySelector(".clear-button");
        let taskAddForm = document.querySelector("#task-form-modal>form");

        cancelButton.addEventListener("click", () => { self.style.display = "none" });
        clearButton.addEventListener("click", clearFields);
        taskAddForm.addEventListener("submit", addTask);
    };

    const createSelf = () => {
        let self = document.createElement("div");
        self.id = "task-form-modal";
        self.innerHTML = modalContent;
        return self;
    };

    //Only public method, calls the other helper functions that create the element and set the necessary event listeners
    const addSelfTo = (parentSelector) => {
        let self = createSelf();

        let parent = document.querySelector(parentSelector);
        parent.appendChild(self);

        addButtonFunctions(self);
    };


    return {
        addSelfTo,
    };
})();

export default modal;