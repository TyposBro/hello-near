import {NearBindgen, near, call, view, initialize, Vector, UnorderedMap} from 'near-sdk-js'
import {Company, Employee, Status} from './model'
import {assert} from './utils'

@NearBindgen({})
class ExperienceContract{
	constructor(){
		this.employee_map = new UnorderedMap('employee_map');
		this.company_map = new UnorderedMap('company_map');
	}

	@call({})
	hireEmployee({ employee_id }){
		//Automatically takes company_id
		const company_id = near.predecessorAccountId();
		if(!this.company_map[company_id])
			this.company_map.set(company_id, new Company(company_id));
		if(!this.employee_map[employee_id])
			this.employee_map.set(employee_id, new Employee(employee_id));
		const company = this.company_map[company_id];
		const employee = this.employee_map[employee_id];
		assert(!employee.status.active, 'Person already has an active job');
		company.employees.set(employee_id, 1);
		employee.status = new Status({active:true, company_id, startYear:currentYear()});
	}

	@call({})
	kickEmployee({ employee_id }){
		//Automatically takes company_id
		const company_id = near.predecessorAccountId();
		if(!this.company_map[company_id])
			this.company_map.set(company_id, new Company(company_id));
		if(!this.employee_map[employee_id])
			this.employee_map.set(employee_id, new Employee(employee_id));
		const company = this.company_map[company_id];
		const employee = this.employee_map[employee_id];
		assert(employee.status.active && employee.status.company_id == company_id && company.employees.get(employee_id), 'Person was not hired to this company');
		company.employees.set(employee_id, 0);
		employee.experience.push(WorkPeriod({startYear:employee.status.startYear, endYear:currentYear(), company_id}))
		employee.status = new Status({active:false});
	}

	@view({})
	getEmployees({}){
		//Automatically takes company_id
		const company_id = near.predecessorAccountId();
		if(!this.company_map[company_id])
			this.company_map.set(company_id, new Company(company_id));
		const company = this.company_map[company_id]
		return Array.from(company.employees);
	}

	@view({})
	getExperienceList({}){
		//Automatically takes employee_id
		const employee_id = near.predecessorAccountId();
		if(!this.employee_map[employee_id])
			this.employee_map.set(employee_id, new Employee(employee_id));
		const employee = this.employee_map[employee_id];
		assert(employee, 'Non existent company');
		return employee.experience.toArray();
	}

	@view({})
	getStatus({}){
		//Automatically takes employee_id
		const employee_id = near.predecessorAccountId();
		if(!this.employee_map[employee_id])
			this.employee_map.set(employee_id, new Employee(employee_id));
		const employee = this.employee_map[employee_id];
		return employee.experience.status;
	}
}

