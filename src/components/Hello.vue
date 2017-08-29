<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Learning basic Vue.js with Vuex State Management</h2>
    <br>
    <router-link :to="'blogs'" class="btn btn-success btn-lg">
      Blog Sample
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'CRUD App with Vuex'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;

  h1, h2 {
    font-weight: normal;
  }
}
</style>
