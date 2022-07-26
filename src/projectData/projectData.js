const projectData = (() => {
    const projects = [];
    let selectedProject = projects[0];

    const addProject = (newProject) => projects.push(newProject);

    return {
        projects,
        addProject,
    }
})();

export default projectData;