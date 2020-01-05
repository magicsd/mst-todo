import React from 'react'
import { observer } from 'mobx-react'
import TodoList from './TodoList'
import CreateForm from './CreateForm'

const Todo = ({ store }) => (
  <div className='App-body'>
    <CreateForm store={store} />
    {store.totalCount > 0 ? (
      <p>You have {store.doneCount} of {store.totalCount} tasks done.</p>
    ) : (
      <p>Let's create some tasks to do!</p>
    )}
    <TodoList store={store} />
  </div>
)

export default observer(Todo)
