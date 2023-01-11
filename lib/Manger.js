import { Employee } from "./Employee.js";

export default class Manger extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); ///call the constructor of Employee(parent)
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  ///overriden the getRole of Employee
  getRole() {
    return "Manger";
  }
}
