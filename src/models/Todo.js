import { types } from 'mobx-state-tree'

const Todo = types.model({
  id: types.number,
  name: types.optional(types.string, ''),
  isDone: types.optional(types.boolean, false),
}).actions(self => ({
  setName(newName) {
    self.name = newName
  },

  toggle() {
    self.isDone = !self.isDone
  }
}))

export default Todo
