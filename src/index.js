import "./reset.css"
import "./styles.scss"

import displayController from "./displayController/displayController.js"

import taskForm from "./taskForm/taskForm.js"

import projectData from "./projectData/projectData.js"
import Project from "./Project/Project.js"
import Task from "./Task/Task.js"

let defaultProject = new Project('default project');
projectData.addProject(defaultProject);

defaultProject.addTask(new Task("task title", "checklist", "testing", "01/01/1970", "important"))

displayController.refreshDisplay(projectData.projects[0]);