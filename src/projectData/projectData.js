import Project from "../Project/Project.js"

//TODO
//Add functionality to update and save in localStorage

const projectData = (() => {
    const projects = [];

    //Use selectedProject to know which project is currently selected
    let _selectedProjectIndex = 0;

    const addProject = (projectTitle) => projects.push(new Project(projectTitle));

    return {
        //Set slected project index, get selected project itself
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