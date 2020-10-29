<template>
  <div class="portfolio-item__content">
             <img :src="imgSrc" alt="" class="portfolio-item__img">
             <div  class="portfolio-item__link">
                <h5>{{title}}</h5>
                <a  :href ="link" class="portfolio-item__title" target="_blank">Link</a>
             </div>
          </div>
</template>

<script>
export default {
props: ['imgSrc','title', 'link']
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
  /* top: 20%; */
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