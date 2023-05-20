export default {
    data() {
      return {
        projects: [],
        selectedArea: null,
        employees: []
    
      }
    },
    mounted() {
      this.fetchEmployees();
      this.fetchProjects();
    },
    computed: {
        projectAreas() {
          const areas = new Set();
          this.projects.forEach((project) => {
            project.areas.forEach((area) => areas.add(area));
          });
          return Array.from(areas);
        },
        filteredProjects() {
          if (!this.selectedArea) {
            return this.projects;
          }
          return this.projects.filter((project) => project.areas.includes(this.selectedArea));
        },
        featuredProjects() {
            return this.projects.filter((project) => project.featured);
        },
      },
    methods: {
      fetchEmployees() {
        const apiUrl = 'http://localhost:3001/employees';
  
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            this.employees = data;
            console.log(this.employees)
          })
          .catch((error) => {
            console.error('Error fetching employee data:', error);
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
            console.error('Error fetching employee data:', error);
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

        showPopup(element) {
            element.showPopup = true;
        },
        hidePopup(element) {
            element.showPopup = false;
        },
        findEmployeeById(id) {
            return this.employees.find(employee => employee.id === id);
        },
        goToemployeePage(id) {
          router.push("/employees/" + id)
    
        },
      }
  }