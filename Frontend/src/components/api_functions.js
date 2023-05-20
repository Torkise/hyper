import { parseArray } from './helper_functions.js';

export function fetchProjects() {
  const apiUrl = 'http://localhost:3001/projects';

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const projects = data;
      projects.forEach(project => project.areas = parseArray(project.areas));
      console.log(projects);
      return projects;
    })
    .catch((error) => {
      console.error('Error fetching projects:', error);
      throw error;
    });
}

export function fetchEmployees() {
  const apiUrl = 'http://localhost:3001/employees';

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const employees = data;
      console.log(employees);
      return employees;
    })
    .catch((error) => {
      console.error('Error fetching employee data:', error);
      throw error;
    });
}
