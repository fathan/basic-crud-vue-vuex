import blogsApi from '../../api/blogs'
import * as mutationType from '../mutation_types'

// initial state
const state = {
  all: [],
  form_add: false,
  message: null,
  form_edit: null
}

// initial getters
const getters = {
  allBlogs: state => {
    return state.all.sort((a, b) => {
      return a['id'] < b['id']
    })
  },
  formAdd: state => state.form_add,
  messages: state => state.message,
  formEdit: state => state.form_edit
}

// initial actions
const actions = {
  // get data from API
  getAllBlogs ({commit}) {
    blogsApi.getBlogs(blogs => {
      commit(mutationType.SHOW_ALL_BLOG, blogs)
    })
  },
  // save data
  saveBlog (context, data, bool) {
    blogsApi.saveBlog(data, (response) => {
      if (response.status === 201) {
        state.message = 'Data success has saved'
        context.dispatch('getAllBlogs')
      }
    })
  },
  // update blog
  updateBlog (context, blog) {
    blogsApi.updateBlog(blog.id, blog, (response) => {
      if (response.status === 201) {
        context.dispatch('getAllBlogs')
      }
    })
  },
  // delete blog
  destroy (context, idblog) {
    let conf = window.alert('Are you sure delete this Data?')

    if (conf) {
      blogsApi.deleteBlog(idblog, (response) => {
        if (response.status === 200) {
          context.dispatch('getAllBlogs')
        }
      })
    }
  }
}

// initial mutation
const mutations = {
  [mutationType.SHOW_ALL_BLOG] (state, blogs) {
    state.all = blogs
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
