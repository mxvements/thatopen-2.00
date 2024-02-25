
export class Project {
	name;
	description;
	user_role;
	status;
	finish_date;

	constructor(name, description, user_role, status, finish_date){
		this.name = name;
		this.description = description;
		this.user_role = user_role;
		this.status = status;
		this.finish_date = finish_date; 
	}

	constructor(data){
		this.name = data.name;
		this.description = data.description;
		this.user_role = data.user_role;
		this.status = data.status;
		this.finish_date = data.finish_date;
	}
} 