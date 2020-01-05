import { types } from 'mobx-state-tree'

const Todo = types.model({
  name: types.optional(types.string, ''),
  isDone: types.optional(types.boolean, false),
})

export default Todo
