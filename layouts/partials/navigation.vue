<template>
	<header class="site-header">
<div class="container mx-auto flex items-stretch justify-between pt-4 pb-4">
	      <div class="site-branding">
			<div class="site-title">
				<nuxt-link to="/">web-devsoltan</nuxt-link>
			</div>
			    
          </div>
				<nav class="main-navigation"> 
					<div class="menu-main-menu-container">
					<ul class="flex items-stretch menu">
					<li><nuxt-link to="/">Home</nuxt-link></li>
					<li><nuxt-link to="works">Works</nuxt-link></li>
					<li><nuxt-link to="contact">Contact</nuxt-link></li>
					</ul>
					</div>
				</nav>
			   
		</div>	
	</header>
</template>
<script>

export default {

    data() {
    	return {
    	}
    }



  
}

</script>



<style>

 .site-branding {
	    flex-basis: 30%;
}

.main-navigation {
	transition: height, margin .3s ease;
	flex-basis: 70%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: stretch;
	align-content: center;
}

.site-title a {
	color: #fff;
	text-decoration: none;
	font-size: 20px;
	text-transform: uppercase;
	font-weight: 700;
	transition: color 1s ease-in;
	
}

.site-title a:hover {
	color: #D5F7FF;
}


.section_title {
	text-align: center;
	h2 {
		text-transform: uppercase;
		font-size: 2em;
	}
}
.menu {
	margin: 0;
	padding: 0;
	list-style-type: none;
}
.menu li {
   
}

.menu li a {
	display: block;
	text-decoration: none;
	color: #fff;
	text-transform: uppercase;
	font-weight: 700;
	margin: 0 10px;
	transition: all .25s ease;
}

.menu li:hover > a,
.menu li.focus > a {
	color: #1779ba;
}

.menu li .nuxt-link-exact-active {
	color: #1583cc;
}

.nav-btn {
	width: 40px;
	height: 25px;
	position: relative;
	margin-left: auto;
	transform: rotate(0deg);
	transition: .5s ease-in-out;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	z-index: 2;
}

	
@media only screen and (max-width: 560px) {
  
 .site-title a { 
   font-size: 16px;
 }
 
}
@media only screen and (max-width: 440px) {
  
 .site-branding { 
   display: none;
 }
 .main-navigation {
 	flex-basis: 100%;
 	justify-content: center;
 }
 .menu {
 	margin: 0;
 	padding: 0;
 }
}



</style>