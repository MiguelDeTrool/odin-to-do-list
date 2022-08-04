import displayController from "../displayController/displayController";

const taskDeleteButtons = (() => {
    const deleteTask = (e, projectData) => {
        //Get index of task in project from event
        let index = e.target.parentElement.getAttribute("data-index");
        projectData.selectedProject.removeTask(index);
    };

    return {
        deleteTask,
    };
})();

export default taskDeleteButtons;