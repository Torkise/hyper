<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter(); 
const goToHomePage = () => {
  scrollToTop()
  router.push("/")
}

const scrollToTop = (urlEnd: string) => {
  const urlString = window.location.href
  const url = new URL(urlString); // Create a URL object from the URL string
  const pathSegments = url.pathname.split('/'); // Split the pathname into segments
  const lastSegment = pathSegments[pathSegments.length - 1]; // Get the last segment of the URL
  if (lastSegment === urlEnd) {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  else {
    window.scrollTo(0, 0)
  }

}

</script>

<template>
  <header class="not-home">
  <!-- <header :class="{ 'not-home': $route.path !== '/' }"> -->
    <img alt="Vue logo" @click="goToHomePage" class="logo" src="@/assets/logo.svg"  />

    <div class="wrapper">
      <nav>
        <RouterLink to="/" @click="scrollToTop('')">Home</RouterLink>
        <RouterLink to="/projects" @click="scrollToTop('projects')">Projects</RouterLink>
        <RouterLink to="/areas" @click="scrollToTop('areas')">Areas</RouterLink>
        <RouterLink to="/employees" @click="scrollToTop('employees')">Employees</RouterLink>
        <RouterLink to="/aboutus" @click="scrollToTop('aboutus')">About us</RouterLink>
        <RouterLink to="/contactus" @click="scrollToTop('contactus')">Contact us</RouterLink>
      </nav>
      <!-- <HelloWorld v-if="$route.path === '/'" msg="Welcome to Venture Capital" />  -->

      
    </div>
  </header>
  <main style="padding-top: 10vh; padding-bottom: 10vh;">
    <RouterView />
  </main>
  <footer>
    <p>&copy; 2023 Genesis Capital. All rights reserved.</p>
  </footer>

</template>


<style scoped>


header {
  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
  z-index: 999;
  line-height: 1.5;
  max-height: 100vh;
  transition: all 0.3s ease;
}


footer {
  background-color: #f2f2f2;
  padding: 3rem;
  text-align: center;
  font-size: 14px;
  z-index: 998;
  position: absolute;

  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
}


.not-home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 125px;
  /* background: linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0.8)); */
  background: rgb(255, 255, 255);
  padding: 1rem;
  z-index: 999;
}


.logo {
  display: block;
  margin: 0 auto 2rem;
  max-width: 100%;
  height: 15vh;
  /* margin: 0 auto 2rem; */
  cursor: pointer;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media screen and (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    cursor: pointer;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem; 
   }
}

@media screen and (max-width: 1023px) {
  header {
    height: auto;
    padding: 1rem 0;
    max-width: 100%;
  }

  .logo {
    height: 6vh;
    margin-bottom: 0rem;
  }

  .not-home nav {
    margin-top: 1rem;
  }
  
  .nav {
    font-size: 4px;
  }
}


</style>
