<template>
	
		<section class="works grid-container">
		<h2 class="text-center section-title">Works</h2>

<div class="filters">
			<div class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</div>
			<div class="filter" v-bind:class="{ active: currentFilter === 'landing' }" v-on:click="setFilter('landing')">Landing Page</div>
			<div class="filter" v-bind:class="{ active: currentFilter === 'wp' }" v-on:click="setFilter('wp')">Wordpress</div>
			<div class="filter" v-bind:class="{ active: currentFilter === 'bootstrap' }" v-on:click="setFilter('bootstrap')">Bootstrap</div>
      <div class="filter" v-bind:class="{ active: currentFilter === 'foundation' }" v-on:click="setFilter('foundation')">Foundation</div>
		</div>
	</div>

		<transition-group name="projects" class="portfolio grid-x grid-padding-x">
        
        <div class="portfolio-item cell large-4 medium-6 small-12" 
        v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title"
        v-for="(project, index) in projects" :key="index">
          <work-project 
            :title="project.title"
            :link="project.link"
            :img-src="project.imgSrc"
          />
        </div>

    </transition-group>
    
     </section>

</template>

<script>
import projects from '../data/projects.json'
import WorkProject from '~/components/WorkProject'
  export default {
   components: {WorkProject},
   data() {
    return {
    currentFilter: 'ALL',
      projects,
    };
  },
  
  methods: {
    setFilter: function (filter) {
      this.currentFilter = filter;
    },
  },
  head() {
    return {
      title: 'My works | Viorel Soltan | Front-end Developer',
      meta: [
        {
          name: 'description',
          content:
            'Bootstrap Landing Page, Zurb Foundation Landing Page, Wordpress Website using Zurb Foundation',
        },
      ],
    };
  },
};
</script>

<style>

.portfolio-item {
  margin-bottom: 20px;
  transition: all 1s;
}
.filters {
  margin: 25px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.filter {
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.35s;
  border-radius: 6px;
  margin: 5px 10px;
}

.filter.active {
	box-shadow:0px 1px 3px 0px #00000026;
  background: #1779ba;
  color: #fff;
}

.filter:hover {
	background: #1779ba;
  color: #fff;
} 

.projects-enter {
	transform: scale(0.5) translatey(-80px);
	opacity:0;
}

.projects-leave-to{
	transform: translatey(30px);
	opacity:0;
}

.projects-leave-active {
	position: absolute;
	z-index:-1;
}



</style>