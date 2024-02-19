
function showModal()
{
	const modal = document.getElementById("new-project-modal");
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
newProjectBtn.addEventListener("click", showModal);