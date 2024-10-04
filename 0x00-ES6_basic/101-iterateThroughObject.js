export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Iterate through the reportWithIterator and collect employee names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the names with " | " and return the result
  return employeeNames.join(' | ');
}
