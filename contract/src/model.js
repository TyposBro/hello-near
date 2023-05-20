import {UnorderedMap, Vector} from 'near-sdk-js';

export class Company{
	constructor({company_id}){
		this.company_id = company_id;
		this.employees = new UnorderedMap('active_employees_map');
	}
};

export class Employee{
	constructor({employee_id}){
		this.employee_id = employee_id;
		this.experience = new Vector<WorkPeriod>('experience_list')
		this.status = new Status({active : false})
	}
};

export class WorkPeriod{
	constructor({startYear, endYear, company_id}){
		this.startYear = startYear;
		this.endYear = endYear;
		this.company_id = company_id
	}
};

export class Status{
	constructor({active ,company_id, startYear}){
		this.active = active
		if(active){
			this.company_id = startYear;
			this.startYear = startYear;
		}
	}
}