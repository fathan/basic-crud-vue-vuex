<template>
  <div id='blog-index'>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>LIST DATA BLOG ALL</strong></h3>
        </div>
        <div class="pull-right">
          <router-link :to="'/blog/new'" class="btn btn-lg btn-default">
            New Data
          </router-link>
          <router-link :to="'/'" class="btn btn-lg btn-primary">
            Back to Homepage
          </router-link>
        </div>
      </div>
    </div>
    <hr class="top">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>NO</th>
          <th>TITLE</th>
          <th>AUTHOR</th>
          <th>CATEGORY</th>
          <th>STATUS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(blog, index) in blogs" v-bind:key="blog.id">
          <td><div class="text-center">{{ index+1 }}</div></td>
          <td>{{ blog.title }}</td>
          <td>{{ blog.author }}</td>
          <td>{{ blog.category }}</td>
          <td>
            <label v-if="blog.status == 1" class="label label-primary">
              Published
            </label>
            <label v-else class="label label-danger">
              Unpublished
            </label>
          </td>
          <td>
            <button @click="deleteData(blog)" class="btn btn-sm btn-warning">
              Edit Data
            </button>
            <button @click="destroy(blog.id)" class="btn btn-sm btn-danger">
              Delete Data
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'blog-index',
  computed: mapGetters({
    blogs: 'allBlogs',
    messages: 'messages'
  }),
  created () {
    this.$store.dispatch('getAllBlogs')
  }
}
</script>

<style lang="scss" scoped>
  hr {
    margin-top: 0px;
    margin-bottom: 0px;

    &.top{
      margin-bottom: 20px;
    }
  }
</style>
