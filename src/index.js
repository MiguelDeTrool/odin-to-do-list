import "./reset.css"
import "./styles.scss"

import displayController from "./displayController/displayController.js"
import taskForm from "./taskForm/taskForm.js"

import projectData from "./projectData/projectData.js"
import Project from "./Project/Project.js"
import Task from "./Task/Task.js"


projectData.addProject(new Project("default project"));

projectData.selectedProject.addTask(new Task("task title", "checklist", "testing", "01/01/1970", "important"));

displayController.refreshDisplay(projectData);
