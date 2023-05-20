
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
    <nav class="menu-phone">
      <ul>
        <li><a href="#general"><img src="../assets/icons/general.svg"><span></span></a></li>
        <li><a href="#energy"><img src="../assets/icons/energy.svg"><span></span></a></li>
        <li><a href="#sustainability"><img src="../assets/icons/sustainability.svg"><span></span></a></li>
        <li><a href="#technology"><img src="../assets/icons/technology.svg"><span></span></a></li>
        <li><a href="#healthcare"><img src="../assets/icons/healthcare.svg"><span></span></a></li>
      </ul>
    </nav>
    <h1 class="page-title">Our Fields of Interest</h1>
    <section id="general" class="area-section">
      <!-- Content for Section 1 -->
      <p>In Genesis Capital, we are committed to investing in innovative and high-growth potential startups that are poised to make a significant impact in their respective industries. On this page, we provide an overview of the areas in which we invest and the types of businesses we are looking to support. Whether you are an entrepreneur seeking funding for your startup or an investor interested in learning more about our investment strategy, we hope this page provides valuable insights into our focus and approach.</p>
    </section>

    <section id="energy" class="area-section">
      <!-- Content for Section 2 -->
      <h2 class="page-title">Energy</h2>
    </section>

    <section id="sustainability" class="area-section">
      <!-- Content for Section 3 -->
      <h2 class="page-title">Sustainability</h2>
    </section>

    <section id="technology" class="area-section">
      <!-- Content for Section 4 -->
      <h2 class="page-title">Technology</h2>
    </section>

    <section id="healthcare" class="area-section">
      <!-- Content for Section 5 -->
      <h2 class="page-title">Healthcare</h2>
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
