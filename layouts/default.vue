<template>
  <div>
    <navigation />

    <nuxt/>
  </div>
</template>

<script>
   import Navigation from './partials/navigation'
  export default {
     components: {
      Navigation
      
     }
  }
</script>


<style>
body {
font-family: 'Nunito', sans-serif;
}

html {
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  min-width: 320px;
  overflow-x: hidden;
}

.site-header {
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
}
.site-header, .site-footer {
  background-color: #2c3840;
  width: 100%;
}
.page-enter-active {
  transition: all 0.25s ease-out;
}

.page-leave-active {
  transition: all 0.5s ease-in;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

.section-title {
  margin: 15px 0;
  text-transform: uppercase;
  font-weight: 700;
}

</style>
