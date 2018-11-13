<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view/>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar'

export default {
  name: 'App',
  components: {
    navigationBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin: 0;
  padding: 0;
}
</style>
