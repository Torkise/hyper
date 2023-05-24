<script>
import { goToAreaPage } from '../components/helper_functions.js';
import { fetchProjects, fetchAreas } from '../components/api_functions.js';

export default {
  data() {
    return {
      areas: [],
      projects: [],
      };
  },
  methods: {
    goToAreaPage
  },
  async mounted() {
    this.areas = await fetchAreas();
    this.projects = await fetchProjects();
  }
}
</script>

<template>
  <div class="areas">
    
    <h1 class="page-title">Our Fields of Interest</h1>
    <section id="general" class="area-section">
      <p></p>
    </section>

    <div v-for="area in areas" :key="area.id">
      <section :id="area.name.toLowerCase()" class="area-section">
        <!-- Content for Section -->
        <h2 class="page-title">{{area.name}}</h2>
        <p>{{ area.description }}</p>
        <div @click="goToAreaPage(area.id)"><p class="learnmore">Learn more..</p></div>
      </section>
    </div>


  </div>
</template>

<style>
  .areas {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 8rem;
    margin-left: 6rem;
    grid-gap: 20px;
  }

  .area-section {
    margin-bottom: 4rem;
  }

  .menu {
    position: fixed;
    top: 3;
    left: 0;
    padding: 1rem;
    background-color: #f1f1f1;
    border-radius: 0 20px 20px 0;
  }
  .menu-phone {
    display: none;
  }

  .menu ul {
    list-style: none;
    padding: 1rem;
  }

  .menu li {
    /* margin-bottom: 1rem; */
    padding: 0.5rem;
  }

  .menu a {
    color: #000000;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    text-decoration: none;
  }

  .menu img {
    margin-right: 0.5rem;
    width: 20px; 
    height: auto;
  }

  .menu span {
    margin-left: 0.5rem;
  }

  .learnmore {
    margin-top: 1rem;
    margin-left: 0.5rem;
    color: #979797;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    .menu {
      display: none;
    }

    .menu-phone {
      display: block;
      position: fixed;
      left: 0;
      padding-top: 2rem;
      background-color: #f1f1f1;
    }

    .menu-phone ul {
    list-style: none;
    padding: 1rem;
  }

  .menu-phone li {
    margin-bottom: 0.5rem;
    padding: 0.2rem;
  }

  .menu-phone a {
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

    
    .areas {
      margin-left: 4rem;
      padding: 2rem;
    }
  }
</style>
