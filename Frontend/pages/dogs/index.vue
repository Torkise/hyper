<!--
    Page with the list of all the dogs.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <!--
            Form used to filter the list by age.
        -->
        <div class = "form-container">
            <label for = "age-filter">Age filter</label><input id = "age-filter" type = 'text' placeholder = "Age filter" v-model = "age">
        </div>
        <h1>Dogs</h1>
        <div id="card-container">
            <Card v-for = "dog of filtered" :title = "dog.name" :subtitle = "dog.breed" :link = "'/dogs/' + dog.id" />
        </div>
    </main>
</template>

<script setup>
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: dogs } = await useFetch(useRuntimeConfig().public.serverURL + '/dogs')
    /*
        In order to implement a filter, we use the computed property.
        This allows to have a cached value that contains the filtered list.
        Instead of using the normal list for the cards, we used the computed property directly.
    */
    const age = ref(0);

    const filtered = computed(() => {
        // Checking for values where the full list is provided
        if(age.value == 0 || age.value == "")
            return dogs.value

        const arr = []

        // Filtering the list
        for(let dog of dogs.value) {
            if(dog.age < age.value)
                arr.push(dog)
        }

        // Returning the filtered list
        return arr
    })
</script>

<style>
    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

    .form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid brown;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;

        background-color: burlywood;
        padding: 20px;
    }

</style>