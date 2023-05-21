<template>
    <div class="project-div">
        <h1>
            {{ project.title }}
        </h1>
        <p v-html="project.longDescription"></p>
        <h2>Areas</h2>
        <div class="project-areas" v-for="(area, key) in areas" :key="key">
            <div @click="goToAreaPage(area.id)">
                {{ area.name }}
            </div>
        </div>
        <h2 class="supervisor" @click="goToEmployeePage(employee.id)">Supervisor: {{ employee.name }}</h2>
    </div>
</template>

<script>
import router from '@/router';

    export default {
        data() {
            return {
                project: [],
                employee: [],
                areas: [],
            }
        },
        mounted() {
            this.projectId = this.$route.params.id;
            this.fetchProject(this.projectId)
            this.fetchSupervisor(this.projectId)
            this.fetchAreas(this.projectId)
        },
        methods: {
            fetchProject(projectId) {
                const apiUrlProj = 'http://localhost:3001/project/' + projectId
                
                fetch(apiUrlProj)
                        .then((response) => response.json())
                        .then((data) => {
                            this.project = data;

                    })
                    .catch((error) => {
                        console.error('Error fetching employee data:', error);
                    });
            },
            fetchSupervisor(id) {
                const apiUrl = 'http://localhost:3001/employee/' + id

                fetch(apiUrl)
                    .then((response) => response.json())
                    .then((data) => { 
                        this.employee = data;
                })
                .catch((error) => {
                    console.log('Error fetching employee:', error)
                });
            },
            fetchAreas(projectID) {
                const apiUrl = "http://localhost:3001/areas/project/projectid=" + projectID

                fetch(apiUrl)
                    .then((response) => response.json())
                    .then((data) => {
                        this.areas = data;
                        console.log(this.areas)
                    })


            },
            goToEmployeePage(employeeId) {
                window.scrollTo(0, 0)
                router.push("/employees/" + employeeId)
            },
            goToAreaPage(areaId) {
                window.scrollTo(0, 0)
                router.push('/areas/' + areaId)
            }
        }
    }
</script>

<style>
.project-div {
    padding-top: 100px;
    padding-left: 10rem;
    width: 100vw - 10rem;
    height: 120vh;
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
    max-width: 80%  ;
}

h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.label {
  display: inline-block;
  margin-right: 10px;
  padding: 5px;
  border-radius: 4px;

}

.project-areas {
    display: inline-block;
    background-color: #f2f2f2;
    padding: 5px 10px;
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

.project-areas:hover {    
    background-color: #dcdcdc;
}


.supervisor {
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
}

.supervisor:hover {
    color: rgb(23, 23, 123);
    text-decoration: underline;
}

</style>