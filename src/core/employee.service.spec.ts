import { EmployeeService } from "./employee.service";

describe('employee.service.ts', () => {
    beforeEach(async () => {
    });
  
    it('should create the app', () => {
        const empSvc= new EmployeeService();
        empSvc.empCount=50;
       const emps= empSvc.getEmployees();
      expect(emps.length).toBe(empSvc.empCount);
    });
});