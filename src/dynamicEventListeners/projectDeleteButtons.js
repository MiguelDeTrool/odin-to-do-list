const projectDeleteButtons = (() => {
    const deleteProject = (e, projectData) => {
        //Get index of task in project from event
        let index = e.target.closest(".project-element").getAttribute("data-index");
        
        if (confirm("Are you sure you want to delete the entire project? All its tasks will be deleted.") === true) {
            projectData.removeProject(index);
            projectData.selectedProject = (index - 1);
        };
    };

    return {
        deleteProject,
    };
})();

export default projectDeleteButtons;