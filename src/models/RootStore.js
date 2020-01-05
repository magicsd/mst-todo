import { types } from 'mobx-state-tree'
import { values } from 'mobx'
import User from './User'
import Todo from './Todo'

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.optional(types.map(Todo), {}),
  })
  .views(self => ({
    get totalCount() {
      return self.todos.size
    },

    get doneCount() {
      return values(self.todos).filter(t => t.isDone).length
    }
  }))
  .actions(self => ({
    addTodo(id, name) {
      self.todos.set(id, Todo.create({ id, name }))
    },

    removeTodo(id) {
      self.todos.delete(id)
    },
  }))

export default RootStore
