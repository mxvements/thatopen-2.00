
export type PorjectStatus = "pending" | "active" | "finished";
export type UserRole = "architect" | "engineer" | "developer";

export interface IProject {
	name: string;
	description: string;
	user_role: UserRole;
	status: PorjectStatus;
	finish_date: Date;	
}

export class Project implements IProject{
	name: string;
	description: string;
	user_role: UserRole;
	status: PorjectStatus;
	finish_date: Date;

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
	}
} 