<template>
	
		<section class="works grid-container">
		<h2 class="text-center section-title">Works</h2>
		<div class="portfolio grid-x grid-padding-x">
        
        <div class="portfolio-item cell large-4 medium-6 small-12" 
        v-for="(project, index) in projects" :key="index">
          <work-project 
            :title="project.title"
            :link="project.link"
            :img-src="project.imgSrc"
          />
        </div>
    </div> 
    
     </section>

</template>

<script>
import projects from '../data/projects.json'
import WorkProject from '~/components/WorkProject'
  export default {
   components: {WorkProject},
   data() {
     return {
         projects
     }
   },
	head () {
    return {
      title: 'My works | Viorel Soltan | Front-end Developer',
      meta: [
        { name: 'description', content: 'Bootstrap Landing Page, Zurb Foundation Landing Page, Wordpress Website using Zurb Foundation'}
      ]
      
    }

  }
  }
</script>

<style>
.portfolio-item {
  margin-bottom: 20px;
}
</style>