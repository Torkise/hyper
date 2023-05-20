import router from "@/router";
export function parseArray(input) {
    try {
      // Remove the surrounding single quotes if present
      const sanitizedInput = input.replace(/'/g, '"');
      // Parse the string into an array
      const array = JSON.parse(sanitizedInput);
      // Make sure the parsed value is an array
      if (Array.isArray(array)) {
        return array;
      } else {
        throw new Error('Invalid input format');
      }
    } catch (error) {
      throw new Error('Invalid input format');
    }
  }

export function goToProjectPage(id) {
    router.push("/projects/" + id)
  }

export function goToEmployeePage(id) {
    router.push("/employees/" + id)
  }

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
