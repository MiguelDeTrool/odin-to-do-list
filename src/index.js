import "./reset.css"
import "./styles.scss"

import displayController from "./displayController/displayController.js"
import eventListeners from "./eventListeners/eventListeners.js"
import taskForm from "./taskForm/taskForm.js"
import projectData from "./projectData/projectData.js"


//Within displayController, pass projectData on as an argument instead of importing it as a module
//Delete tasks
//New project form
//Styles

projectData.addProject("Default Project");

projectData.selectedProject.addTask("Example", "text", "This is a task example", "01/01/1970", "important");

displayController.refreshDisplay(projectData);

eventListeners.addAllListeners(projectData)