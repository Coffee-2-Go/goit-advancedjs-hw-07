/*
  Your task will be to create two classes – Employee and Manager.

  The Employee class should include:

  - a name property, which will be accessible to everyone.
  - a department property, which will be accessible only within the Employee class.
  - a salary property, which will be accessible only within the Employee class and its subclasses.

  The Manager class should be a subclass of the Employee class.

  You need to implement a constructor in the Manager class that will call the superclass constructor and increment salary by 10000.

*/

class Employee {
  // Fill in the access modifiers
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

export {};
