<template>
  <div class="projects">
    <h1 class="page-title">A Look into Our Investments</h1>
    <p>Welcome to Genesis Capital Projects page, where you can discover the latest investment opportunities and innovative startups we are backing. Our team of experienced professionals is dedicated to identifying and supporting the most promising ventures across a variety of sectors. Explore our portfolio and learn more about the exciting new companies we are supporting.</p>
    <div>
      <label for="area-select">Filter by project area: </label>
      <select id="area-select" v-model="selectedArea">
        <option value="">All</option>
        <option v-for="area in projectAreas" :value="area">{{ area }}</option>
      </select>
    </div>
    <br>
    <div class="project-list">
      <div v-for="project in filteredProjects" :key="project.id">
        <div class="project" @click="showPopup(project)">
          <div class="project-area" :class="area.toLowerCase()" v-for="area in project.areas" :key="area">
            {{ area }}
          </div>
          <h2>{{ project.title }}</h2>
          <p>{{ project.shortDescription }}</p>
          <!-- <button @click="showPopup(project)">Learn More</button> -->
          <p class="learnmore">Learn more...</p>
        </div>
        <div v-if="project.showPopup" class="overlay" @click="hidePopup(project)"></div>
        <div v-if="project.showPopup" class="project-popup">
          <div class="project-popup-content">
            <div class="project-area" :class="area.toLowerCase()" v-for="area in project.areas" :key="area">
              {{ area }}
            </div>
            <h2>{{ project.title }}</h2>
            <p v-html="project.longDescription"></p>
            <br>
            <img class="employee-img-popup" :src="findEmployeeById(project.supervisor).photo">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../components/ProjectInfo.js"></script>

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

  .project-popup-content h2 {
    font-size: 24px;
    color: #404040;
  }

  .project-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    padding: 2rem;
    width: 80%;
    max-height: 80%;
    overflow: hidden;
  }
  
  
  .employee-img-popup{
    width: 10vh;
    border-radius: 50%;
    margin-right: 2rem;
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
  
  .project button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 0;
    background-color: #6e6e6e;
    color: #fff;
    cursor: pointer;
  }

  .learnmore {
    margin-top: 1rem;
    margin-left: 0.5rem;
    color: #979797;
  }
  
  .project button:hover {
    background-color: #979797;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

</style>
