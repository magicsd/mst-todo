import React from 'react'
import { observer } from 'mobx-react'

const TodoItem = ({ todo, onRemove }) => (
  <div>
    <input
      style={todo.isDone ? { textDecoration: 'line-through' } : {}}
      type='text'
      value={todo.name}
      onChange={({ target: { value } }) => todo.setName(value)}
    />
    <input type='checkbox' checked={todo.isDone} onChange={todo.toggle} />
    <button onClick={onRemove}>Remove</button>
  </div>
)

export default observer(TodoItem)
