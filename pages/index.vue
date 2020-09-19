<template>
  <div class="home_preview"
   :style="{ backgroundImage: `url(${backgroundUrl})` }">

   <div class="grid-container">
    <div class="grid-x grid-padding-x align-center">

     <div class="title-wapper">
        <div class="title-wapper__text">
       <h1>Viorel Soltan</h1>
         <p>Front-End Developer </p>
        </div>
     </div>

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

<style lang="scss">

.home_preview {
	width: 100%;
	height: 100vh;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	text-align: center;
    position: relative;
	.title-wapper {
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
	  align-content: center;
	  justify-content: center;
	  //margin-top: 170px;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  &__text {
	  	//max-width: 500px;
	  	animation-name: example;
      animation-duration: 4s;
	  	h1 {
       font-family: 'Nunito', sans-serif;    
       font-size: 60px;
       font-weight: 700;
       color: #fff;
       text-transform: uppercase;
	  		border:  8px solid #fff;
	  		padding: 15px;
	  		margin-bottom: 0;
	  		background-color: rgba(0, 0, 0, 0.3); 
        span {
        	color: #333;
        }

	  	}
	  	p {
	  		font-size: 20px;
	  		margin-top: 20px;
	  		text-transform: uppercase;
	  		color: #fff;
	  	}
     

	  }
	  @-webkit-keyframes example {
 0% {opacity: 0;}
 25% {opacity: 0.3;}
 50% {opacity:0.5;}
 75% {opacity:0.7;}
 100% {opacity:1;}
}

/* Standard syntax */
@keyframes example {
 0% {opacity: 0;}
 25% {opacity: 0.3;}
 50% {opacity:0.5;}
 75% {opacity:0.7;}
 100% {opacity:1;}
}
	}
	.bottom_link {
		margin-top: 30px;
		a {
			text-decoration: none;
			color: #fff;
			transition: opacity 1s ease-in-out;
			&:hover {
			  opacity: 0.6;
			}
			span {
				font-size: 50px;
			}
		}
	}

}
@media only screen and (max-width : 1080px) {
.home_preview .title-wapper__text h1 {
	font-size: 45px;
}

}
@media only screen and (max-width : 992px) {
.home_preview .title-wapper__text h1 {
	font-size: 40px;
}

}

@media only screen and (max-width : 768px) {
.home_preview .title-wapper__text h1 {
	font-size: 40px;

}

}
@media only screen and (max-width : 680px) {
.home_preview .title-wapper__text h1 {
	font-size: 40px;

}

.home_preview .title-wapper {
	width: 100%;

}

}



</style>
