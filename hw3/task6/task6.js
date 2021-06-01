// ===========================ЗАДАНИЕ-6===========================================

const employee = {
  name: "Vitalii",
  surname: "Klichko",
};

const addEmployee = {
  age: 49,
  salary: 10000000,
};

const newEmployee = {...employee, ...addEmployee};

console.log(newEmployee);
