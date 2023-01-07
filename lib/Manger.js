import { Employee } from "./Employee";

export class Manger extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); ///call the constructor of Employee(parent)
    this.officeNumber = officeNumber;
  }
  ///overriden the getRole of Employee
  getRole() {
    return "Manger";
  }
}
