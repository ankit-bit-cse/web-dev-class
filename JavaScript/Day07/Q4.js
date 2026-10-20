
const empolyee = {
    Name: "Rahul kumar",
    Salary: 30000,
    Department: "IT",
};

delete empolyee.Salary;

console.log(empolyee);
console.log("Salary exists:", "Salary" in empolyee);
