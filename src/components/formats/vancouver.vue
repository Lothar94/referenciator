<template>
    <div>
        <h5>Vancouver</h5>
        <div class="format-block">
            <p>format</p>
        </div>
    </div>
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
.format-block {
    border: 1px solid gray;
    border-radius: 5px;
    width: 80%;
    display: block;
    margin: 0 auto;
}
</style>
