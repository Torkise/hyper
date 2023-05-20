<template>
    <div class="project-div">
        <h1>
            {{ project.title }}
        </h1>
        <p v-html="project.longDescription"></p>
        <h2>Areas</h2>
        <div class="project-areas" v-for="(value, key) in project.areas" :key="key">
                {{ value }}
        </div>
        <h2>Supervisor: {{ employee.name }}</h2>
    </div>
</template>

<script>
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
        },
        methods: {
            fetchProject(projectId) {
                const apiUrlProj = 'http://localhost:3001/project/' + projectId
                
                fetch(apiUrlProj)
                        .then((response) => response.json())
                        .then((data) => {
                            this.project = data;
                            this.project.areas = this.parseArray(this.project.areas)
                            console.log(this.project.areas)

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
                        console.log(this.employee)
                })
                .catch((error) => {
                    console.log('Error fetching employee:', error)
                });
            },
            parseArray(input) {
            try {
                // Remove the surrounding single quotes if present
                const sanitizedInput = input.replace(/'/g, '"');
                // Parse the string into an array
                const array = JSON.parse(sanitizedInput);
                // Make sure the parsed value is an array
                if (Array.isArray(array)) {
                    return array;
                } else {
                    throw new Error('Invalid input format');
                }
                } catch (error) {
                throw new Error('Invalid input format');
                }
            },
        }
    }
</script>

<style>
.project-div {
    padding-top: 100px;
    width: 100vw;
    height: 100vh;
}
.label {
  display: inline-block;
  margin-right: 10px;
  padding: 5px;
  border-radius: 4px;

}


</style>