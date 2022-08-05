const projectSelector = (() => {
    const selectProject = (e, projectData) => {
        //Get index of task in project from event
        let index = e.target.closest(".project-element").getAttribute("data-index");
        projectData.selectedProject = index;
    };

    return {
        selectProject,
    };
})();

export default projectSelector;