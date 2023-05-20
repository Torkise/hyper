<script>
import { goToProjectPage } from '../components/helper_functions.js';
import { fetchProjects } from '../components/api_functions.js';

export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    goToProjectPage,
  },
  async mounted() {
    this.projects = await fetchProjects();
  },
};
</script>

<template>
  <div class="projects">
    <h1 class="page-title">A Look into Our Investments</h1>
    <p>Welcome to Genesis Capital Projects page, where you can discover the latest investment opportunities and innovative startups we are backing. Our team of experienced professionals is dedicated to identifying and supporting the most promising ventures across a variety of sectors. Explore our portfolio and learn more about the exciting new companies we are supporting.</p>
    <div class="project-list">
      <div v-for="project in projects" :key="project.id">
        <div class="project" @click="goToProjectPage(project.id)">
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

<style>
  .projects {
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
  
  .project {
    width: 100%;
    max-width: 30rem;
    padding: 2rem;
    border: 1px solid #ddd;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 5px;
  }

  .project:hover {
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
  
  .project-area.healthcare {
    background-color: #ffd388;
  }
  
  .project-area.energy {
    background-color: #68b56b;
  }
  
  .project-area.technology {
    background-color: #9ab8ff;
  }

  .project-area.sustainability {
    background-color: #9d64f8;
  }

  .project h2 {
    font-size: 1.5rem;
    margin-top: 0;
  }
  
  .project p {
    font-size: 1rem;
  }

  .learnmore {
    margin-top: 1rem;
    margin-left: 0.5rem;
    color: #979797;
  }
</style>
