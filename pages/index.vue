<template>
  <div class="home h-screen bg-center bg-no-repeat w-full bg-cover relative"
   :style="{ backgroundImage: `url(${backgroundUrl})` }">

   <div class="container mx-auto">
     <div class="contents absolute text-center text-white">
     <h1 class="font-serif border-8 border-white pt-5 pb-5 pl-4 pr-4 uppercase mb-6 mt-6">Viorel Soltan</h1>
     <p class="uppercase lg:text-xl md:text-base">Front-End Developer </p>
     
   </div>
   </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/home_preview2.jpg'

export default {
  data() {
    return { 

      backgroundUrl

    }
    

  },
  head () {
    return {
      title: 'Viorel Soltan | Front-end Developer',
      meta: [
        { name: 'description', content: 'Viorel Soltan: Personal Portfolio website. Front-end Web Developer specialising in Responsive Websites using HTML5, CSS3, Javascript, jQuery, Vue.JS, PHP, Wordpress'}
      ]
    }
  }
}


</script>

<style scoped>

/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.contents {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.contents h1 {  
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 60px;
}

@media only screen and (max-width: 1034px) {
  .contents h1 {
    font-size: 50px;
  }
}
@media only screen and (max-width: 992px) {
  .contents h1 {
    font-size: 46px;
  }
}
@media only screen and (max-width: 860px) {
  .contents h1 {
    font-size: 42px;
  }
  
}
@media only screen and (max-width: 768px) {
  .contents h1 {
    font-size: 30px;

  }

  .contents {
  top: 35%;
  
}
  
}
@media only screen and (max-width: 560px) {
  .contents {
    width: 90%;
  }
 .site-title a { 
   font-size: 18px;
 }

 


}
</style>
