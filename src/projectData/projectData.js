//Contains all the data (projects and tasks within them)

//TODO
//Add functionality to update and save in localStorage

const projectData = (() => {
    const projects = [];

    //Use selectedProject to know which project is currently selected
    let _selectedProjectIndex = 0;

    const addProject = (newProject) => projects.push(newProject);

    return {
        //Getter and setter for selected project
        set selectedProject(value) {
            _selectedProjectIndex = value;
        },
        get selectedProject() {
            return projects[_selectedProjectIndex];
        },

        projects,
        addProject, 
    }
})();

export default projectData;