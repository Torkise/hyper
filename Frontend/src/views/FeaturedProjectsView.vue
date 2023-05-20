<template>
  <div class="featured-projects-page">
    <h1 class="page-title">Explore Our Featured Projects</h1>
    <p class="page-text">Discover our carefully selected projects that showcase innovation, excellence, and impactful solutions. These featured projects highlight the diverse range of industries and technologies we invest in, providing insights into our commitment to supporting groundbreaking ventures.</p>

    <div class="project-list">
      <div v-for="project in featuredProjects" :key="project.id">
        <div class="featured-project" @click="goToProjectPage(project.id)">
          <div class="project-area" :class="area.toLowerCase()" v-for="area in project.areas" :key="area">
            {{ area }}
          </div>
          <h2>{{ project.title }}</h2>
          <p>{{ project.shortDescription }}</p>
          <p class="learnmore">Learn more...</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import router from "@/router";
export default {
    data() {
      return {
        projects: [],

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
      goToProjectPage(id) {
        router.push("/projects/" + id)
      }
    }
  }
</script>

<style>
  .featured-projects-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 8rem;
    grid-gap: 20px;
  }

  .project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .featured-project {
    width: 100vh;
    /* max-width: 100rem; */
    padding: 2rem;
    border: 1px solid #ddd;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 5px;
  }

  .featured-project:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
    cursor: pointer;
  }

  .project-area {
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.25rem 1rem;
    border-radius: 1rem 1rem 1rem 1rem;
    color: #fff;
    text-transform: capitalize;
  }
 
  
</style>
