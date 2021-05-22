class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  get Name() {
    return `${this.name}`;
  }
  get Age() {
    return `${this.age}`;
  }
  get Salary() {
    return `${this.salary}`;
  }
}

class Programmer extends Employee {
  constructor(salary, lang) {
    super(salary);
    this.salary = salary;
    this.lang = lang;
  }
  get Salary() {
    return `${this.salary * 3}`;
  }
}
class Programmer_two extends Employee {
  constructor(salary, lang) {
    super(salary);
    this.salary = salary;
    this.lang = lang;
  }
  get Salary() {
    return `${this.salary * 6}`;
  }
}
class Programmer_three extends Employee {
  constructor(salary, lang) {
    super(salary);
    this.salary = salary;
    this.lang = lang;
  }
  get Salary() {
    return `${this.salary * 7}`;
  }
}
const user = new Employee("karina", 17, 4000);
const prog = new Programmer(user.salary, "en");
const prog2 = new Programmer_two(user.salary, "ua");
const prog3 = new Programmer_three(user.salary, "ru");
console.log(prog.Salary, prog2.Salary, prog3.Salary);
