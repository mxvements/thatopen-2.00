import { IProject } from "./classes/Project";
import { UserRole } from "./classes/Project";
import { PorjectStatus } from "./classes/Project";
import { ProjectsManager } from "./classes/ProjectsManager";
// FUNCTS

function showModal(id: string)
{
	const modal = document.getElementById(id);
	if (modal && modal instanceof HTMLDialogElement) {
	 	modal.showModal();
	} else {
		console.warn("The provided modal (id) was not found. ID: ", id);
	}
}

/* this works as well:
const showModal = () => {
	const modal = document.getElementById("new-project-modall")
	modal.showModal()
}
*/
function closeModal(id: string)
{
	const modal = document.getElementById(id);
	if (modal && modal instanceof HTMLDialogElement) {
	 	modal.close();
	} else {
		console.warn("The provided modal (id) was not found. ID: ", id);
	}
}
/*
	asignment
	create a custom function that works a toggleModal instead of having show/closeModal
*/


// DOM INTERACTIVITY

const projectsListUI = document.getElementById("projects-list") as HTMLElement; //type assertion, this may fail
const projectsManager = new ProjectsManager(projectsListUI);

// This document object is provided by the browser, and its main purpose is to help us interact with the DOM.
const newProjectBtn = document.getElementById("new-project-btn");
//console.log("new projects btn value: ", newProjectBtn);
if (newProjectBtn) {
	//!newProjectBtn should be true when is null (meaning: does not exist)
	newProjectBtn.addEventListener("click", () => {showModal("new-project-modal")});
} else {
	console.warn("New projects button was not found");
}

// Catching up form data
const projectForm = document.getElementById("new-project-form")
if (projectForm && projectForm instanceof HTMLFormElement){
	projectForm.addEventListener("submit", (e) => {
		e.preventDefault()
		const formData = new FormData(projectForm);
		const projectData: IProject = {
			name: formData.get("name") as string,
			description: formData.get("description") as string,
			userRole: formData.get("userRole") as UserRole,
			status: formData.get("status") as PorjectStatus,
			finishDate: new Date(formData.get("finishDate") as string)
		}
		/*const project = new Project(
			formData.get("name"),
			formData.get("description"),
			formData.get("userRole"),
			formData.get("status"),
			formData.get("finishDate")
		);
		we replace the new Project with the projectManager function
		*/
		const project = projectsManager.newProject(projectData);
		projectForm.reset();
		console.log(project);
		closeModal('mew-project-form');
	  });
} else {
	console.warn("The project form was not found. Check the ID!");
}