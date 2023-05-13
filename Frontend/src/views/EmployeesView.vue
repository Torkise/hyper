<script src="../components/EmployeeInfo.js"></script>

<template>
  <div class="meet-the-employees">
    <h1>Meet the experts</h1>
    <p>Our company is proud to have a team of highly skilled and experienced professionals. Each of our employees brings unique expertise and perspectives to the table, allowing us to provide the best possible service to our clients. Get to know our team members below:</p>
    <div class="employees-list">
      <div v-for="(employee, index) in employees" :key="index">
        <div class="employee-card" @click="showPopup(employee)">
          <img class="employee-img" :src="employee.photo">
          <h2>{{ employee.name }}</h2>
          <h3>{{ employee.title }}</h3>
        </div>
        <div v-if="employee.showPopup" class="overlay" @click="hidePopup(employee)"></div>
        <div v-if="employee.showPopup" class="employee-popup">
          <!-- <div class="close-button-x" @click="hidePopup(employee)">×</div> -->
          <div class="employee-popup-content">
            <img class="employee-popup-img" :src="employee.photo">
            <h2>{{ employee.name }}</h2>
            <h3>{{ employee.title }}</h3>
            <p v-html="employee.bio" class="employee-popup-bio"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.meet-the-employees {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80vh, 1fr));
  grid-gap: 20px;
  padding: 4rem;
  /* margin-left: 1vh; */
}
.employees-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25vh, 1fr));
  grid-gap: 20px;
  /* padding: 2rem; */
}
.employee-card {
  background-color: #fff;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
.employee-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}
.employee-img {
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
}

.employee-popup-img {
  display: block;
  margin: 0 auto;
  float: right;
}

.employee-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  padding: 20px;
  width: 80%;
  max-height: 80%;
  overflow: hidden;
}

.employee-popup-content h2 {
  font-size: 24px;
  color: #404040;
}
.employee-popup-bio {
  width: 500px;
}

/* .close-button-x {
  position: relative;
  font-size: 30px;
  font-weight: bold;
  color: #999;
  cursor: pointer;
  z-index: 999;
} */

/* .close-button-x:hover {
  color: #333;
} */

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