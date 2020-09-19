<template>
	<header class="site-header">
<div class="grid-container">
	<div class="grid-x grid-padding-x">
	      <div class="site-branding">
			<div class="site-title">
				<nuxt-link to="/">web-devsoltan</nuxt-link>
			</div>
			    
          </div>
		  <button class="nav-btn" @click="menuToggle = !menuToggle" :class="{ open: menuToggle }">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
				<nav id="site-navigation" class="main-navigation" :class="{ navOpen: menuToggle }"> 
					<div class="menu-main-menu-container">
					<ul class="menu">
					<li><nuxt-link to="/">Home</nuxt-link></li>
					<li><nuxt-link to="works">Works</nuxt-link></li>
					<li><nuxt-link to="contact">Contact</nuxt-link></li>
					</ul>
					</div>
				</nav>
			   </div>
		</div>	
	</header>
</template>
<script>

export default {

    data() {
    	return {
			menuToggle: false
    	}
    }



  
}

</script>



<style lang="scss">
.site-header,.site-footer {
	background-color: #2c3840;
	width: 100%;
}
 header {
	padding: 15px 0;
	margin: 0 auto;
	color: #fff;
	
	.site-branding {
		flex-basis: 30%;
		.site-title {
			
			a {
				color: #fff;
				text-decoration: none;
				font-size: 20px;
				text-transform: uppercase;
				font-weight: 700;
				transition: color 1s ease-in;
				&:hover {
   color: #D5F7FF;
}
			}
		}

	}
	nav {
		width: 70%;
		display: flex;
		justify-content: flex-end;
	 align-items: stretch;
	 align-content: center;
	 color: #fff;
  
	}
}

.main-navigation {
	transition: height, margin .3s ease;

	ul {
		display: block;
		list-style: none;
		margin: 0;
		padding-left: 0;

		li:hover > ul,
		li.focus > ul {
			left: auto;
		}
	}

	li {
		float: left;
		position: relative;

		&:hover > a,
		&.focus > a {
			color: #1779ba;
		}
	}

	a {
		display: block;
		text-decoration: none;
		color: #fff;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 10px;
		transition: all .25s ease;

	}

	.current_page_item > a,
	.current-menu-item > a,
	.current_page_ancestor > a,
	.current-menu-ancestor > a {
		color: #1583cc;
	}
}
.menu {
  
  .nuxt-link-exact-active {
    color: #1779ba;
}

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

.nav-btn span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #fff;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.nav-btn span:nth-child(1) {
  top: 0px;
}

.nav-btn span:nth-child(2),
.nav-btn span:nth-child(3) {
  top: 10px;
}

.nav-btn span:nth-child(4) {
  top: 20px;
}

.nav-btn.open span:nth-child(1) {
  top: 10px;
  width: 0%;
  left: 50%;
}

.nav-btn.open span:nth-child(2) {
  transform: rotate(45deg);
}

.nav-btn.open span:nth-child(3) {
  transform: rotate(-45deg);
}

.nav-btn.open span:nth-child(4) {
  top: 10px;
  width: 0%;
  left: 50%;
}
@media only screen and (min-width: 768px) { 
.nav-btn {
    display: none;
  }
}
@media only screen and (max-width : 768px) {
.main-navigation ul {
	display: none;
}
.navOpen {
	width: 100%!important;
	margin-top: 15px;
  border-top: 3px solid white;
  padding-top: 20px;
    
	.menu-main-menu-container {
		width: 100%;
		.menu {
			display: flex;
			flex-direction: column;
      flex: 100%; 
      li {
      	float: none;
      	a {
      	padding: 10px;
      }
      }
      
		}
	}
		
	
}


}



@media only screen and (max-width: 560px) {
  header .site-branding .site-title a {
    font-size: 16px;
}

}
@media only screen and (max-width: 620px) {
header .site-branding {
    flex-basis: initial;
}
}













</style>