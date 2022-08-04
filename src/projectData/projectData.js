import Project from "../Project/Project.js"

//TODO
//Add functionality to update and save in localStorage

const projectData = (() => {
    const _projects = [];

    //Use selectedProject to know which project is currently selected
    let _selectedProjectIndex = 0;

    const addProject = (projectTitle) => _projects.push(new Project(projectTitle));

    const removeProject = (index) => _projects.splice(index, 1);

    return {
        //Set selected project index, get selected project itself
        set selectedProject(value) {
            _selectedProjectIndex = value;
        },
        get selectedProject() {
            return _projects[_selectedProjectIndex];
        },

        get projects() {
            return _projects;
        },

        addProject,
        removeProject,
    }
})();

export default projectData;