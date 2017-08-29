<template>
  <div id='blog-new'>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>NEW DATA BLOG</strong></h3>
        </div>
        <div class="pull-right">
          <router-link :to="'/blog/'" class="btn btn-default">
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
            <form class="">
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="status">Status</label>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="panel panel-default">
                        <div class="panel-body">
                          <input type="radio" name="status" value="1">
                          &nbsp;Published
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="panel panel-default">
                        <div class="panel-body">
                          <input type="radio" name="status" value="0">
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
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-md-6">
                  <label for="Author">Author</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-md-6">
                  <label for="Category">Category</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group col-md-12">
                  <label for="Category">Description</label>
                  <textarea class="form-control"></textarea>
                </div>
                <div class="form-group col-md-12">
                  <button type="button" class="btn btn-lg btn-success">
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
export default {
  name: 'blog-new',
  data: () => ({

  })
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
