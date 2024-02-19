
function showModal()
{
	const modal = document.getElementById("new-project-modall")
	modal.showModal()
}
/* this works as well:

const showModal = () => {
	const modal = document.getElementById("new-project-modall")
	modal.showModal()
}
*/

// This document object is provided by the browser, and its main purpose is to help us interact with the DOM.
const newProjectBtn = document.getElementById("new-project-btn")
newProjectBtn.addEventListener("click",showModal)