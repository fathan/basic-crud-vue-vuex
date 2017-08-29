<template>
  <div id='blog-edit'>
    <div class="row">
      <div class="col-md-12">
        <div class="alert alert-success">
          {{ messages }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>EDIT DATA BLOG</strong></h3>
        </div>
        <div class="pull-right">
          <router-link :to="'/blogs/'" class="btn btn-default">
            Back to List Blogs
          </router-link>
        </div>
      </div>
    </div>
    <hr class="top">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <form @submit.prevent="updateBlog(blogs)">
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="status">Status</label>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="panel panel-default">
                        <div class="panel-body">
                          <input type="radio" name="status" v-model="blogs.status" value="1">
                          &nbsp;Published
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="panel panel-default">
                        <div class="panel-body">
                          <input type="radio" name="status" v-model="blogs.status" value="0">
                          &nbsp;Unpublished
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-12">
                  <hr>
                </div>
                <div class="form-group col-md-12">
                  <label for="title">Title</label>
                  <input type="text" v-model="blogs.title" class="form-control">
                </div>
                <div class="form-group col-md-6">
                  <label for="Author">Author</label>
                  <input type="text" v-model="blogs.author" class="form-control">
                </div>
                <div class="form-group col-md-6">
                  <label for="Category">Category</label>
                  <input type="text" v-model="blogs.category" class="form-control">
                </div>
                <div class="form-group col-md-12">
                  <label for="Category">Description</label>
                  <textarea v-model="blogs.description" class="form-control"></textarea>
                </div>
                <div class="form-group col-md-12">
                  <button type="submit" class="btn btn-lg btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'blog-edit',
  data () {
    return {
      blogs: {}
    }
  },
  computed: mapGetters({
    messages: 'messages'
  }),
  methods: {
    getBlogById: function (id) {
      this.axios.get('http://localhost:3000/blogs/' + id)
      .then((response) => {
        this.blogs = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
    ...mapActions([
      'updateBlog'
    ])
  },
  created () {
    this.getBlogById(this.$route.params.id)
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
