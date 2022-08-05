const projectName = (() => {
    const showNameInput = (projectElement) => {
        let projectNameElement = projectElement.querySelector(".project-name");
        projectNameElement.textContent = "";

        let nameInput = document.createElement("input");
        projectNameElement.appendChild(nameInput);
        nameInput.focus();

        let confirmButton = document.createElement("button");
        confirmButton.textContent = "✔️";
        confirmButton.classList.add("project-name-confirm");
        projectNameElement.appendChild(confirmButton);
    };

    const newProjectNameInput = (projectData) => {
        let lastProjectIndex = projectData.projects.length - 1;
        let projectElementToAffect = document.querySelector(`#projects-container>[data-index = "${lastProjectIndex}"]`);
        showNameInput(projectElementToAffect);
    };

    const changeProjectNameInput = (e) => {
        let projectElementToAffect = e.target.closest(".project-element");
        showNameInput(projectElementToAffect);
    };

    const confirmProjectName = (e, projectData) => {
        let input = document.querySelector(".project-element input");
        if (input.value == "") {
            projectData.selectedProject.title = `My Project`
        }
        else {
            projectData.selectedProject.title = input.value.toString();
        }
    };


    return {
        newProjectNameInput,
        changeProjectNameInput,
        confirmProjectName,
    };
})();

export default projectName;