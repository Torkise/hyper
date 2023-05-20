<template>
    <div class="image-container">
        <Transition name="fade" mode="out-in" >
                <img :src="currentImage" alt="Employees Photo" class="image-transition" :key="currentImage"> 
        </Transition>
        <div class="banner">
        <h1 class="img-text">Investing in tomorrow's innovations today</h1>
    </div>  
    </div>
</template>


<script lang="ts">

export default {
    data() {
        return {
            currentImage: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            images: [
                "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            ],
            currentIndex: 0
        };
    }, 
    mounted() {
        this.startImageRotation(); 
    },
    methods: {
        startImageRotation() {
            setInterval(() => { 
                this.currentIndex = (this.currentIndex + 1) % this.images.length
                this.currentImage = this.images[this.currentIndex]
            }, 10000)
        }
    }
}
</script>

<style>


.image-container {
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    padding-bottom: 56.25%;  
    position: relative;
  }
  .banner {
    position: relative;
    top: 40vh;
    left: 0;
    width: 60%;
    background-color: rgba(31, 31, 31, 0.5);
    padding: 3rem;
    color: #fff;
    font-size: 2.5vh;
  }

  .img-text {
    position: relative;

  }

  .img-text img {
    display: block;
  width: 100%;
  height: auto;
  }

  .image-container img {
    position: absolute;
    top:0;
    left: 0; 
    width: 100%;
    height: 100%;
    max-height: 90vh;
    object-fit: cover;
    object-position: center;
  }
  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@media screen and (max-width: 1024px) {
    .image-container {
    padding-bottom: 75%; /* Change the aspect ratio to 4:3 */
    padding-top: 2rem; /* Add some padding to the top */
  }
  .banner {
    width: 80%; /* Make the banner wider */
    font-size: 20px; /* Decrease the font size */
  }
  }
  @media screen and (max-width: 768px) {
    .image-container {
    padding-bottom: 75%; /* Change the aspect ratio to 4:3 */
    padding-top: 2rem; /* Add some padding to the top */
  }
  .banner {
    width: 100%; /* Make the banner wider */
    font-size: 16px; /* Decrease the font size */
  }
}
  @media screen and (max-width: 620px) {
    .image-container {
    padding-bottom: 75%; /* Change the aspect ratio to 4:3 */
    padding-top: 2rem; /* Add some padding to the top */
  }
  .banner {
    font-size: 10px; /* Decrease the font size */
    top: 10vh;
  }
} 

</style>