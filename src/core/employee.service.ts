import { EmployeeModel } from "../models/employee.model";

export class EmployeeService {
    empCount = 15;
    getEmployees(): EmployeeModel[] {
        return [...Array(this.empCount).keys()].map(v => {
            return { eno: v, ename: 'Emp' + v, age: 40, address: 'blr' + v }
        });
    }
}