<template>
	<div class="container mx-auto h-screen">
		<section class="pt-12 pb-6 works">
		<h2 class="text-center uppercase mb-10">Works</h2>
		<div class="portfolio flex flex-wrap">
        
        <div class="portfolio-item w-full md:w-1/2 lg:w-1/3 flex flex-col px-3 mb-16">
          <div class="portfolio-item__content">
             <img src="https://i.postimg.cc/sXRLRd97/pahu-page.png" alt="" class="portfolio-item__img">
             <div  class="portfolio-item__link">
                <h5>Landing Page</h5>
                <a  href ="https://bushido2014.github.io/work-pahupage/" class="portfolio-item__title" target="_blank">Link</a>
             </div>
          </div>
        </div>
        
        <div class="portfolio-item w-full md:w-1/2 lg:w-1/3 flex flex-col px-3 mb-16">
          <div class="portfolio-item__content">
            <img src="https://i.postimg.cc/tTz4dk0w/santeh23.png" alt="" class="portfolio-item__img">
            <div  class="portfolio-item__link">
                <h5>Bootstrap 4</h5>
                <a  href ="https://bushido2014.github.io/work-santeh/" class="portfolio-item__title" target="_blank">Link</a>
             </div>
          </div>
        </div>

        <div class="portfolio-item w-full md:w-1/2 lg:w-1/3 flex flex-col px-3 mb-16">
            <div class="portfolio-item__content">
                <img src="https://i.postimg.cc/prw1WwKD/fountain.jpg" alt="" class="portfolio-item__img">
            <div  class="portfolio-item__link">
               <h5>Landing Page</h5>
               <a  href ="https://bushido2014.github.io/work-fountain/" class="portfolio-item__title" target="_blank">Link</a>
            </div>

        </div>
        </div>

        <div class="portfolio-item w-full md:w-1/2 lg:w-1/3 flex flex-col px-3 mb-16">
            <div class="portfolio-item__content">
            <img src="https://i.postimg.cc/wBR2vfT2/product.jpg" alt="" class="portfolio-item__img">
            <div  class="portfolio-item__link">
                <h5>Landing Page</h5>
                <a  href ="https://bushido2014.github.io/work-productgold/" class="portfolio-item__title" target="_blank">Link</a>
           </div>
            </div>
        </div>

        <div class="portfolio-item w-full md:w-1/2 lg:w-1/3 flex flex-col px-3 mb-16">
          <div class="portfolio-item__content">
            <img src="https://i.postimg.cc/13tJxRkL/florans.jpg" alt="" class="portfolio-item__img">
            <div  class="portfolio-item__link">
                <h5>Zurb Foundation</h5>
                <a  href ="https://florans.netlify.app/" class="portfolio-item__title" target="_blank">Link</a>
           </div>
          </div>
        </div>

        <div class="portfolio-item w-full md:w-1/2 lg:w-1/3 flex flex-col px-3 mb-16">
          <div class="portfolio-item__content">
            <img src="https://i.postimg.cc/FH78yxHd/web-wp.png" alt="" class="portfolio-item__img">
            <div  class="portfolio-item__link">
                <h5>Wordpress Site</h5>
                <a  href ="http://veselimsya-na-ura.ru/" class="portfolio-item__title" target="_blank">Link</a>
             </div>
            </div>
        </div>
    </div>
     </section>
	</div>
</template>

<script>
  export default {


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

<style scoped>
	
.portfolio-item__content {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    
}

.portfolio-item__content .portfolio-item__img {
  transition: all 0.35s;
  margin: auto;
}

.portfolio-item__content .portfolio-item__link {
    position: absolute;
    overflow: hidden;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    border-bottom: 1px solid #FFF;
    border-top: 1px solid #FFF;
    transition: opacity 0.35s, transform 0.35s;
  transform: scale(0, 1);
}

.portfolio-item__content:hover .portfolio-item__link {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
}

.portfolio-item__content:hover .portfolio-item__img {
            filter: brightness(0.4);
}

.portfolio-item__content .portfolio-item__link h5 {
  text-transform: uppercase;
  text-align: center;
  position: relative;
  font-size: 23px;
  background-color: transparent;
  color: #FFF;
  padding: 5% 0 10%;
  opacity: 0;
  filter: alpha(opacity = 0);
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(0, -100%, 0);
  margin-top: 10px;
  margin-bottom: 10px;

}

.portfolio-item__content .portfolio-item__link a {
  position: relative;
  color: #FFF;
  padding: 12px 82px;
  opacity: 0;
  font-weight: 600;
  filter: alpha(opacity = 0);
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(0, 100%, 0);
  border: 2px solid #fff;
  text-decoration: none;
  border-radius: 6px;
  text-transform: uppercase;
  top: 20%;
  transition: all .25s ease;
  display: inline-block;
}

.portfolio-item__content .portfolio-item__link a:hover {
    /*background-color: #fff;*/
    background-color: #06BC9B;
    border: 2px solid transparent;
    /*color: #444;*/
    color: #fff;

}


.portfolio-item > .portfolio-item__content:hover .portfolio-item__link a, 
.portfolio-item > .portfolio-item__content:hover .portfolio-item__link h5{
   opacity: 1;
    filter: alpha(opacity = 100);
    transform: translate3d(0, 0, 0);
}



</style>