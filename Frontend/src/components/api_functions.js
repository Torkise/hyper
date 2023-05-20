export function fetchProjects() {
    const apiUrl = 'http://localhost:3001/projects';
    var projects = [];
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        projects = data;
        projects.forEach(project => project.areas = parseArray(project.areas))
        console.log(projects)
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
      return projects
  }

export function fetchEmployees() {
    const apiUrl = 'http://localhost:3001/employees';
    var employees = [];
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        employees = data;
        console.log(employees)
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
      return employees
  }
