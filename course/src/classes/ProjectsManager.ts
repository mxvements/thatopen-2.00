import {IProject, Project} from "./Project"

export class ProjectsManager
{
	list: Project[] = [];
	ui: HTMLElement;

	//constructor
	constructor(container: HTMLElement)
	{
		this.ui = container;
	}

	//creates an instance of a project
	newProject(projectData: IProject)
	{
		const project = new Project(projectData);
		this.list.push(project);
		this.ui.append(project.ui);
		return (project);
	}

}