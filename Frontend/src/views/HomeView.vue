<script setup lang="ts">
import { useRouter, type RouteLocationRaw } from 'vue-router'
const router = useRouter(); 
const goToPage = (page: RouteLocationRaw) => {
  router.push(page);
}
</script>
<template>
  <div class="image-container">
    <img src="https://www.networkrail.co.uk/wp-content/uploads/2021/04/research-and-development-portfolio-header.jpg" alt="Homepage Photo">
    <div class="banner">
      <h1>Investing in tomorrow's innovations today</h1>
    </div>  
  </div>
  
  <!-- <div class="home">
    <h1>Welcome to Venture Capital</h1>
    <p>We provide funding and support to innovative startups.</p>
    <h3>Check out our most exciting projects</h3> -->


    <!-- <div class="project-list">
      <div v-for="project in featuredProjects" :key="project.id">
        <div class="project">
          <div class="project-area" :class="area.toLowerCase()" v-for="area in project.areas" :key="area">
            {{ area }}
          </div>
          <h2>{{ project.title }}</h2>
          <p>{{ project.shortDescription }}</p>
          <button @click="showPopup(project)">Learn More</button>
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
            <img class="employee-img-popup" :src="findEmployeeById(employeeId).photo" v-for="employeeId in project.employeeIds" :key="employeeId">
          </div>
        </div>
      </div>
    </div> -->
    <!-- <router-link to="/projects">Explore More Projects In Our Portfolio</router-link>
    <h3>Here at [Venture Captial] we are proud of our dedicated employees</h3>
    <router-link to="/employees">Check Out Our Wonderfull Employees</router-link>
    <br>
    <h2>Our Services</h2>
    <p>At Venture Capital, we offer a range of services to help our portfolio companies succeed:</p>
    <ul>
      <li>Seed funding</li>
      <li>Mentorship and guidance from experienced industry professionals</li>
      <li>Product development and design support</li>
      <li>Marketing and branding assistance</li>
      <li>Access to our network of investors and partners</li>
    </ul>
    <router-link to="/services" class="btn btn-tertiary">Learn More About Our Services</router-link>
  </div> -->
  <div class="home">
    <h1>Welcome to Genesis Capital</h1>
    <p>We provide funding and support to innovative startups.</p>
  </div>
  <div class="section">
    <div class="image-wrapper">
      <img src="https://imageio.forbes.com/specials-images/imageserve/60cf26d139bf3c0abaef3cdc/Multiracial-business-group-in-office/960x0.jpg?format=jpg&width=960" alt="Employees Photo">
    </div>
    <div class="content">
      <p>At Genesis Capital we...</p>
      <button @click="goToPage('/employees')">Learn More</button>
    </div>
  </div>
  <div class="home">
    <p>Can add more info here.</p>
  </div>
  <div class="section">
    <div class="content">
      <p>If you're an entrepreneur with a groundbreaking idea...</p>
      <button @click="goToPage('/projects')">Learn More</button>
    </div>
    <div class="image-wrapper">
      <img src="https://thumbs.dreamstime.com/b/technology-logo-tech-firm-logo-vector-design-full-vector-template-technology-logo-tech-firm-logo-vector-design-full-vector-109273835.jpg" alt="Employees Photo">
    </div>
  </div> 
  <div class="home">
  </div>
</template>

<!-- <script src="../components/ProjectInfo_temp.js"></script> -->

<style>
  .home {
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    padding: 8rem;
  }

  .image-container {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* Maintain a 16:9 aspect ratio (change this value as needed) */
    position: relative;
  }
  .banner {
    position: absolute;
    top: 30vh;
    left: 0;
    width: 40%;
    background-color: rgba(31, 31, 31, 0.5);
    padding: 3rem;
    color: #fff;
    font-size: 24px;
  }

  .image-container img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .section {
    display: flex;
    justify-content: center;
    background-color:  #f2f2f2;
    padding: 3rem;
    color: #000000;
  }

  .image-wrapper {
    flex: 0 0 50%;
  }

  .image-wrapper img {
    width: 100%;
    /* max-height: 300px; */
    border-radius: 50px;
  }

  .content {
    flex: 0 0 50%;
    padding: 4rem;
  }

  .projects {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 8rem;
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
  }

  .section button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 0;
    background-color: hsla(160, 100%, 37%, 1); /* Green color */
    color: #000000;
    cursor: pointer;
    border-radius: 5px; /* Rounded corners */
  }

  .section button:hover {
    background-color: rgb(0, 141, 94); /* Darker green color on hover */
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
