import Vue from 'vue'
import todoStorage from './store.js'

var filters = {
  all: todos => {
    return todos
  },
  active: todos => {
    return todos.filter(todo => {
      return !todo.completed
    })
  },
  completed: todos => {
    return todos.filter(todo => {
      return todo.completed
    })
  }
}

export default {
  data () {
    return {
      todos: todoStorage.fetch(),
      newTodo: '',
      editingTodo: null,
      beforeEditCache: '',
      visibility: 'all'
    }
  },
  // http://vuejs.org/guide/computed.html
  computed: {
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    // 未完成的 item 数量
    activeItemNum () {
      return filters.active(this.todos).length
    },
    completedItemNum () {
      return filters.completed(this.todos).length
    },
    allStatus: {
      get () {
        return this.activeItemNum === 0
      },
      set (isCompleted) {
        this.todos.forEach(todo => {
          todo.completed = isCompleted
        })
      }
    }
  },
  methods: {
    // 新增
    create () {
      var title = this.newTodo.trim()
      if (title) {
        this.todos.push({
          id: Date.now(), // 用当前时间戳做为id
          title: title,
          completed: false
        })
      }
      this.newTodo = ''
    },
    // 进入编辑的状态
    edit (todo) {
      this.beforeEditCache = todo.title
      this.editingTodo = todo
    },
    cancelEdit (todo) {
      this.editingTodo = null
      todo.title = this.beforeEditCache
    },
    // 修改
    update (todo) {
      if (!this.editingTodo) {
        return
      }
      this.editingTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.remove(todo.id)
      }
    },
    // 删除
    remove (id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id
      })
    },
    removeAllCompleted () {
      this.todos = filters.active(this.todos)
    }
  },
  // 每当 todos 变化时，保存todos
  watch: {
    todos: {
      deep: true,
      handler: todoStorage.save
    }
  },
  /*
   * 自定义指令 https://cn.vuejs.org/v2/guide/custom-directive.html
   */
  directives: {
    // 编辑todo时，让 input 获得焦点
    'todo-focus': (el, bind) => {
      var isEdit = bind.value
      if (isEdit) {
        // DOM 更新后再 focus
        Vue.nextTick(function () {
          el.focus()
        })
      }
    }
  }
}
