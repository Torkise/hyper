<script>
import { goToEmployeePage } from '../components/helper_functions.js';
import { fetchEmployees } from '../components/api_functions.js';

export default {
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    goToEmployeePage,
  },
  async mounted() {
    this.employees = await fetchEmployees();
  },
};
</script>

<template>
  <div class="meet-the-employees">
    <h1 class="page-title">Meet the experts</h1>
    <p class="page-text">Our company is proud to have a team of highly skilled and experienced professionals. Each of our employees brings unique expertise and perspectives to the table, allowing us to provide the best possible service to our clients. Get to know our team members below:</p>
    <br>
    <div class="employees-list">
      <div v-for="employee in employees" :key="employee.id">
        <div class="employee-card" @click="goToEmployeePage(employee.id)">
          <img class="employee-img" :src="employee.photo">
          <h2>{{ employee.name }}</h2>
          <h3>{{ employee.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.meet-the-employees {
  display: flex;
  flex-direction: column;
  padding: 8rem;
}

.employees-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25vh, 1fr));
  grid-gap: 20px;
}

.employee-card {
  background-color: #fff;
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
  max-width: 150px;
}
</style>
