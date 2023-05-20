<template>
    <div class="home-b">
        <button @click="logInfo()">Clikck</button>
        <h2>{{ this.emplId }}</h2>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "Ciao"
            }
        },
        mounted() {
            this.emplId = this.$route.params.id
        },
        methods: {
            logInfo() {
                console.log(this.emplId)
            }
        }
    }
</script>

<style>
.home-b {
    padding: 8rem;
    width: 100vh;
    height: 100vh;
}
</style>