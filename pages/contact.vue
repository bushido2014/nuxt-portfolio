<template>
	
		<section class="grid-container">
			<h2 class="text-center section-title">Contact</h2>
			<div class="grid-x grid-padding-x contact-wrapp">
				<ul>
					<li>
						<div class="icon-preview-img grid-x">
                <div> <img src="https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/mail-512.png" alt="email, mail, message icon" class="d-block mx-auto" height="auto" width="32"></div>
                <div>
                <a href="mailto:joomjoom2011@gmail.com">joomjoom2011@gmail.com</a>
              </div>
              </div></li>
					<li>
						<div class="icon-preview-img grid-x">
                <div>
                 <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/04-512.png" alt="call, phone, smart icon" class="d-block mx-auto" height="auto" width="32">
                </div> 
                <div>
                  <span>+ 373 69481509</span>
                </div>  
            </div>
					</li>
					<li>
						<div class="icon-preview-img grid-x">
                <div>
                 <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="github, mark icon" class="d-block mx-auto" height="auto" width="32">
                </div>
                <div>
                 <a href="https://github.com/bushido2014" target="_blank">Bushido2014</a>
                </div>   
             </div>
					</li>
					<li>
						
						<div class="icon-preview-img grid-x">
                    <div>
                     <img src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/skype-512.png" alt="call, skype icon" class="d-block mx-auto" height="auto" width="32">
                    </div>                
                      <div>
                      	<span>tomas.veron</span>
                      </div>
            </div>

					</li>
				</ul>
			</div>
		</section>
		
	
</template>
<script>
	 export default {


	head () {
    return {
      title: 'Contact | Viorel Soltan | Front-end Developer',
      meta: [
        { name: 'description', content: 'Viorel Soltan - Front-end Developer: My Contact '}
      ]
    }
  }

}
</script>
<style scoped lang="scss">
.contact-wrapp [class^="icon-"] {
	font-size: 22px;
	margin-right: 5px;
}
.contact-wrapp {
  ul {
    margin: 0;
    li {
      list-style-type: none;
      margin: 10px 0;
      
    }
  }
}
	.icon-preview-img div {
		margin: 0 10px;
	}
	
  @media only screen and (max-width: 560px) {
  .content ul {
    padding: 0;
  }
 
}
</style>