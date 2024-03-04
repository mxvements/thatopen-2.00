
export type PorjectStatus = "pending" | "active" | "finished";
export type UserRole = "architect" | "engineer" | "developer";

/*	
	Interface
*/
export interface IProject {
	name: string;
	description: string;
	user_role: UserRole;
	status: PorjectStatus;
	finish_date: Date;	
}

/*
	Class
*/ 
export class Project implements IProject{
	name: string;
	description: string;
	user_role: UserRole;
	status: PorjectStatus;
	finish_date: Date;
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
		this.user_role = data.user_role;
		this.status = data.status;
		this.finish_date = data.finish_date;
		this.setUI();
	}

	setUI()
	{
		if (this.ui) {return ;}
		this.ui = document.createElement("div");
		this.ui.className = "project-card"; //we need tha name for the css
		this.ui.innerHTML = `
			<div class="card-header">
				<p style="background-color: #ca8134; padding: 10px; border-radius: 8px; aspect-ratio: 1;">HC</p>
				<div>
				<h5>${this.name}/h5>
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
				<p>${this.user_role}</p>
				</div>
				<div class="card-property">
				<p style="color: #969696;">Cost</p>
				<p>$${this.cost}</p>
				</div>
				<div class="card-property">
				<p style="color: #969696;">Estimated Progress</p>
				<p>${this.progress}%</p>
				</div>
			</div>
		`; //copy pasted the code from the one we had on the index.html
	}
} 