export default function createReportObject(employeesList) {
  const allEmployees = employeesList;
  const getNumberOfDepartments = () => Object.keys(allEmployees).length;
  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
