
export type PorjectStatus = "pending" | "active" | "finished";
export type UserRole = "architect" | "engineer" | "developer";

/*	
	Interface
*/
export interface IProject {
	name: string;
	description: string;
	userRole: UserRole;
	status: PorjectStatus;
	finishDate: Date;	
}

/*
	Class
*/ 
export class Project implements IProject{
	//IProject
	name: string;
	description: string;
	userRole: UserRole;
	status: PorjectStatus;
	finishDate: Date;
	//class internals
	ui: HTMLDivElement;
	cost: number = 0;
	progress: number = 0;

	/*constructor(name, description, user_role, status, finish_date){
		this.name = name;
		this.description = description;
		this.user_role = user_role;
		this.status = status;
		this.finish_date = finish_date; 
	}*/

	constructor(data: IProject){
		this.name = data.name;
		this.description = data.description;
		this.userRole = data.userRole;
		this.status = data.status;
		this.finishDate = data.finishDate;
		this.setUI();
	}

	setUI()
	{
		if (this.ui) {return ;} //so there's only 1 card per project
		this.ui = document.createElement("div");
		this.ui.className = "project-card"; //we need tha name for the css
		this.ui.innerHTML = `
			<div class="card-header">
				<p style="background-color: #ca8134; padding: 10px; border-radius: 8px; aspect-ratio: 1;">HC</p>
				<div>
				<h5>${this.name}</h5>
				<p>${this.description}</p>
				</div>
			</div>
			<div class="card-content">
				<div class="card-property">
				<p style="color: #969696;">Status</p>
				<p>${this.status}</p>
				</div>
				<div class="card-property">
				<p style="color: #969696;">Role</p>
				<p>${this.userRole}</p>
				</div>
				<div class="card-property">
				<p style="color: #969696;">Cost</p>
				<p>$${this.cost}</p>
				</div>
				<div class="card-property">
				<p style="color: #969696;">Estimated Progress</p>
				<p>${this.progress * 100}%</p>
				</div>
			</div>
		`; //copy pasted the code from the one we had on the index.html
	}
} 