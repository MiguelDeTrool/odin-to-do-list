import "./reset.css"
import "./styles.scss"

import displayController from "./displayController/displayController.js"
import taskForm from "./taskForm/taskForm.js"
import projectData from "./projectData/projectData.js"

//Delete tasks
//New project form
//Styles


projectData.addProject("Default Project");

projectData.selectedProject.addTask("Example", "text", "This is a task example", "01/01/1970", "important");

displayController.refreshDisplay(projectData);
