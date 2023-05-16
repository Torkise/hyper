<script setup lang="ts">
import { useRouter, type RouteLocationRaw } from 'vue-router'


const router = useRouter(); 
const goToPage = (page: RouteLocationRaw) => {
  router.push(page);
}

const scrollDown = () => {
  console.log("works")
  const homeElement = document.getElementById("home")
  if (homeElement) {
    const scrollOptions = {
          behavior: 'smooth', // Enable smooth scrolling behavior
          block: 'start', // Scroll to the top of the element
          inline: 'start',
    };
    homeElement.scrollIntoView(scrollOptions)  //It works so idc that it is red :) 
  }
}

</script>
<template>
  <div class="image-container">
    <img style="display: block;" src="https://www.networkrail.co.uk/wp-content/uploads/2021/04/research-and-development-portfolio-header.jpg" alt="Homepage Photo">
       <div class="banner">
      <h1 class="img-text">Investing in tomorrow's innovations today</h1>
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
  <div class="find-more-banner">
      <div @click="scrollDown">See More</div>
  </div>
  <div id="home" class="home">
    <h1>Welcome to Genesis Capital</h1>
    <p>Welcome to Venture Capital, where we are passionate about supporting visionary entrepreneurs with game-changing ideas. Our mission is to help turn your bold ideas into successful businesses by providing the capital, resources, and expertise you need to grow.
</p>
  </div>
  <div class="section">
    <div class="image-wrapper" >
      <img src="https://imageio.forbes.com/specials-images/imageserve/60cf26d139bf3c0abaef3cdc/Multiracial-business-group-in-office/960x0.jpg?format=jpg&width=960" alt="Employees Photo">
    </div>
    <div class="content">
      <p>At Venture Capital, we specialize in identifying and investing in early-stage startups with the potential for significant growth. Our experienced team of investors has a proven track record of success and is committed to helping you achieve your goals.</p>
      <button @click="goToPage('/employees')">Learn More</button>
    </div>
  </div>
  <div class="home">
    <p>Can add more info here.</p>
  </div>
  <div class="section">
    <div class="content">
      <p>If you're an entrepreneur with a groundbreaking idea, we invite you to learn more about how we can support you on your journey. We're always on the lookout for the next big thing, and we're proud to partner with some of the industry's most innovative and visionary entrepreneurs.</p>
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
    display: flex;
    flex-direction: column;
    padding: 8rem;
  }


  .image-container {
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    padding-bottom: 56.25%;     /* Maintain a 16:9 aspect ratio (change this value as needed) */
    position: relative;
  }
  .banner {
    position: relative;
    top: 40vh;
    left: 0;
    width: 60%;
    background-color: rgba(31, 31, 31, 0.5);
    padding: 3rem;
    color: #fff;
    font-size: 2.5vh;
  }

  .img-text {
    position: relative;

  }

  .img-text img {
    display: block;
  width: 100%;
  height: auto;
  }

  .image-container img {
    position: absolute;
    top:0;
    left: 0; 
    width: 100%;
    height: 100%;
    max-height: 90vh;
    object-fit: cover;
    object-position: center;
  }
  .find-more-banner {
    position: sticky;
    background-color: rgba(31, 31, 31, 0.5);
    bottom: 0;
    padding: 1rem;
    color: #fff;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    .image-container {
    padding-bottom: 75%; /* Change the aspect ratio to 4:3 */
    padding-top: 2rem; /* Add some padding to the top */
  }
  .banner {
    width: 80%; /* Make the banner wider */
    font-size: 20px; /* Decrease the font size */
  }
  }
  @media screen and (max-width: 768px) {
    .image-container {
    padding-bottom: 75%; /* Change the aspect ratio to 4:3 */
    padding-top: 2rem; /* Add some padding to the top */
  }
  .banner {
    width: 100%; /* Make the banner wider */
    font-size: 16px; /* Decrease the font size */
  }
}
  @media screen and (max-width: 620px) {
    .image-container {
    padding-bottom: 75%; /* Change the aspect ratio to 4:3 */
    padding-top: 2rem; /* Add some padding to the top */
  }
  .banner {
    font-size: 10px; /* Decrease the font size */
    top: 10vh;
  }
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
