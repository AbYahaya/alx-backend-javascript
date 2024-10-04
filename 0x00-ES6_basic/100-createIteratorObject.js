export default function createIteratorObject(report) {
  const employees = [];

  // Collect all employees from the report object
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }

  // Create and return an iterator
  return employees[Symbol.iterator]();
}
