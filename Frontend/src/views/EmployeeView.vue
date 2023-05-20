<template>
    <div class="home-emp">
        <div class="employee-page">
            <img class="employee-page-img" :src="employee.photo">
            <h2>{{ employee.name }}</h2>
            <h3>{{ employee.title }}</h3>
            <div class="bio">{{ employee.bio }}</div>
            <div class = "project-box">
                <h1 class="h-proj">Projects</h1>
                <div v-for="(project, index) in projects" :key="index">
                    <li @click="goToProject(project.id)">{{ project.title }}</li>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
import router from '@/router';

    export default {
        data () {
            return {
                employee: [],
                projects: [],
            }
        },
        mounted() {
            this.employeeId = this.$route.params.id;
            this.fetchEmployees(this.employeeId);
            this.fetchProjects(this.employeeId);
        },
        methods: {
            fetchEmployees(id) {
                const apiUrl = 'http://localhost:3001/employees/' + id;
                console.log("Fetch API")

                fetch(apiUrl)
                    .then((response) => response.json())
                    .then((data) => {
                        this.employee = data;
                        console.log(this.employee)
                })
                .catch((error) => {
                    console.error('Error fetching employee data:', error);
            });
        },
            fetchProjects(supervisorId) {
                const apiUrl = 'http://localhost:3001/projects/supervisor=' + supervisorId ;
                console.log("fetching projects")
                fetch(apiUrl)
                    .then((response) => response.json())
                    .then((data) => {
                        this.projects = data;
                        console.log(this.projects)
                })
                .catch((error) => {
                    console.error('Error fetching project data:', error);
            });
        },
            goToProject(projectId) {
                router.push("/projects/" + projectId)
        },
    }
}
</script>

<style>
.home-emp {
    padding: 8rem;
    width: 100vw;
}

.employee-page-img {
  display: block;
  float: right;
  max-width: 200px;
  border-radius: 25%;
}

.employee-page {

  position: relative;
  display: block    ;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  margin-left: 2rem;
  /* overflow-y: scroll; */
}

.employee-page.bio {
    max-width: 500px
}

.project-box {
  position: relative;
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(255, 122, 0, 0.1);
  border-radius: 10px;
  max-width: 30%;
}

.project-box text {
    opacity: 1;
}

.project-box li {
    cursor: pointer;
}

.project-box li:hover{
    color: blue;
}



</style>