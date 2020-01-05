import { types } from 'mobx-state-tree'
import User from './User'
import Todo from './Todo'

const RootStore = types.model({
  users: types.map(User),
  todos: types.optional(types.map(Todo), {}),
})

export default RootStore
