<template>
    <div>
        <h3>Referenciator</h3>
        <div id="description">
            <h4>What is it?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div id="referenciator-input">
            <label>Introduce the DOI id:</label>
            <input v-model="doi" @input="format">
        </div>

        <div id="formats">
            <h4>Formats</h4>
            <vancouver></vancouver>
        </div>
    </div>
</template>

<script>
import vancouver from '@/components/formats/vancouver'

export default {
  name: 'Referenciator',
  components: {
    vancouver
  },
  data () {
    return {
      doi: ''
    }
  },
  methods: {
    format () {
      this.$http.get('https://api.crossref.org/works/' + this.doi)
        .then(response => {
          console.log(response)
        }, error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#description {
    text-align: left;
    margin: 0 20px;
}

#referenciator-input {
    input {
        width: 80%;
        height: 20px;
        border-radius: 5px;
        border: 1px solid peru;
    }
}
</style>
