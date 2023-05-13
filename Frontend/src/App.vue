<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter(); 
const goToHomePage = () => {
  router.push("/")
}
</script>

<template>
  <header class="not-home">
  <!-- <header :class="{ 'not-home': $route.path !== '/' }"> -->
    <img alt="Vue logo" @click="goToHomePage" class="logo" src="@/assets/logo.svg"  />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/employees">Employees</RouterLink>
        <RouterLink to="/aboutus">About us</RouterLink>
        <RouterLink to="/contactus">Contact us</RouterLink>
      </nav>
      <!-- <HelloWorld v-if="$route.path === '/'" msg="Welcome to Venture Capital" />  -->

      
    </div>
  </header>
  <main style="padding-top: 10vh; padding-bottom: 10vh;">
    <RouterView />
  </main>
  <footer>
    <p>&copy; 2023 Venture Capital. All rights reserved.</p>
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

main {
  /* padding-top: 125px ; */
  /* padding-bottom: 100px; */
  width: 100vw;
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
  width: 15vh;
  height: 15vh;
  /* margin: 0 auto 2rem; */
  cursor: pointer;
}

nav {
  display: flex;
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

@media (min-width: 1024px) {
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
</style>
