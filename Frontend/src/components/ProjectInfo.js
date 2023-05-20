import { goToProjectPage } from './helper_functions.js';
import { fetchEmployees, fetchProjects } from './api_functions.js';

export default {
    data() {
      return {
        projects: fetchProjects(),
        selectedArea: null,
        employees: fetchEmployees()
      }
    },
    computed: {
        featuredProjects() {
            return this.projects.filter((project) => project.featured);
        },
        projectAreas() {
          const areas = new Set();
          projects.forEach((project) => {
            project.areas.forEach((area) => areas.add(area));
          });
          return Array.from(areas);
        },
      
      filteredProjects() {
          if (!this.selectedArea) {
            return this.projects;
          }
          return this.projects.filter((project) => project.areas.includes(this.selectedArea));
        }
      },
    methods: {
      goToProjectPage,
    }
  }