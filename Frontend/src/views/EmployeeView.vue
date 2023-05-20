<template>
    <div class="home-emp">
        <div class="employee">
            <img class="employee-page-img" :src="employee.photo">
            <h2>{{ employee.name }}</h2>
            <h3>{{ employee.title }}</h3>
            <p v-html="employee.bio" class="employee-bio"></p>
            <div class = "project-box">
                <h1 class="h-proj">Projects</h1>
                <div v-for="(project, index) in projects" :key="index">
                    <li>{{ project.title }}</li>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
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
            logInfo() {
                console.log(this.employeeId)
            },
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
                const apiUrl = 'http://localhost:3001/project/supervisor=' + supervisorId ;
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

.employee {

  position: relative;
  display: block    ;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  max-height: 100%;
  /* overflow-y: scroll; */
}

.employee-bio {
    width: 75%;
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

.projects .h-proj {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.projects li {
  list-style-type: none;
  margin-bottom: 5px;
}





</style>