const newProjectButton = (() => {
    const addProject = (e, projectData) => {

        projectData.addProject("");
        
        //Make selectedProject active Project
        projectData.selectedProject = (projectData.projects.length - 1);
        
        //Add title input with confirm button => break into own object
    };
    
    return {
        addProject,
    };
})();

export default newProjectButton;