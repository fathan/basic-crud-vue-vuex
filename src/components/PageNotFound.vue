<template>
  <div id='page-not-found'>
    <h1>404 - Halaman tidak ditemukan</h1>
    <router-link :to="'/'" class="btn btn-primary">
      back to Homepage
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'page-not-found',
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
  #page-not-found{
    text-align: center;
  }
</style>
