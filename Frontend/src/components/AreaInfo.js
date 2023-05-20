import router from "@/router";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      areas: [],
      projects: [],
      };
  },
  mounted() {
    this.fetchAreas();
    this.fetchProjects();
  },
  methods: {
    fetchAreas() {
      const apiUrl = 'http://localhost:3001/areas';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.areas = data;
          console.log(this.areas)
        })
        .catch((error) => {
          console.error('Error fetching area data:', error);
        });
    },
    fetchProjects() {
      const apiUrl = 'http://localhost:3001/projects';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.projects = data;
          this.projects.forEach(project => project.areas = this.parseArray(project.areas))
          console.log(this.projects)
        })
        .catch((error) => {
          console.error('Error fetching project data:', error);
        });
    },
    parseArray(input) {
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
    },
    goToAreaPage(id) {
      router.push("/areas/" + id)
    }
  }
}

