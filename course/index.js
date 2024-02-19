
function showModal(id)
{
	if (!id) {
		console.warn("The provided modal (id) was not found. ID: ", id);
		return ;
	}
	const modal = document.getElementById(id);
	modal.showModal();
}
/* this works as well:

const showModal = () => {
	const modal = document.getElementById("new-project-modall")
	modal.showModal()
}
*/

// This document object is provided by the browser, and its main purpose is to help us interact with the DOM.
const newProjectBtn = document.getElementById("new-project-btn");
//console.log("new projects btn value: ", newProjectBtn);
if (newProjectBtn) {
	//!newProjectBtn should be true when is null (meaning: does not exist)
	newProjectBtn.addEventListener("click", () => {showModal("new-project-modal")});
} else {
	console.warn("New projects button was not found");
}

//Catching up form data
const projectForm = document.getElementById("new-project-form");
if (!projectForm) {
	console.warn("The project form was not found, check the ID!");
} else {
	projectForm.addEventListener("submmit", (e) => {
		e.preventDefault()
		const formData = new FormData(projectForm)
		console.log("Name: ", formData.get("description"))
	})
}