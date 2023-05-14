<template>
  <div class="areas">
    <nav class="menu">
      <ul>
        <li><a href="#general"><img src="../assets/icons/general.svg"><span>General</span></a></li>
        <li><a href="#energy"><img src="../assets/icons/energy.svg"><span>Energy</span></a></li>
        <li><a href="#sustainability"><img src="../assets/icons/sustainability.svg"><span>Sustainability</span></a></li>
        <li><a href="#technology"><img src="../assets/icons/technology.svg"><span>Technology</span></a></li>
        <li><a href="#healthcare"><img src="../assets/icons/healthcare.svg"><span>Healthcare</span></a></li>
      </ul>
    </nav>

    <h1 class="page-title">Our Fields of Interest</h1>
    <p>In Genesis Capital, we are committed to investing in innovative and high-growth potential startups that are...</p>

    <section id="general">
      <!-- Content for Section 1 -->
    </section>

    <section id="energy">
      <!-- Content for Section 2 -->
    </section>

    <section id="sustainability">
      <!-- Content for Section 3 -->
    </section>

    <section id="technology">
      <!-- Content for Section 4 -->
    </section>

    <section id="healthcare">
      <!-- Content for Section 5 -->
    </section>
  </div>
</template>

<style>
  .areas {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 8rem;
    margin-left: 6rem;
  }

  .menu {
    position: fixed;
    top: 3;
    left: 0;
    padding: 1rem;
    background-color: #f1f1f1;
    border-radius: 0 20px 20px 0;
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
</style>
