<template>
    <nav>
        <ul>
            <li>Referenciator</li>
            <li>About</li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'navigationBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    nav {
        padding: 3px;
        background-color: peru;
        ul {
            text-align: left;
            li {
                display: inline;
                margin: 0 10px;
            }
        }
    }
</style>
