import React, { useRef } from 'react';
import { observer } from 'mobx-react'
import TodoList from './TodoList';

const Todo = ({ store }) => {
  const inputRef = useRef()
  
  const handleSubmit = e => {
    e.preventDefault()
    const { value } = inputRef.current
    if (!value.trim()) return

    store.addTodo(Math.floor(Math.random() * 1000), value.trim())
    e.target.reset()
    inputRef.current.focus()
  }

  return (
    <div className="App-body">
      <TodoList store={store} />
      <form onSubmit={handleSubmit}>
        <label>
          Create todo: <input ref={inputRef} type="text" placeholder="Type..." />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default observer(Todo)