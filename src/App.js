import React, { useState, useRef } from 'react';
import { getSnapshot } from 'mobx-state-tree'
import { observer } from 'mobx-react'
import { values } from 'mobx'

import RootStore from './models/RootStore'

import './App.css';

const store = RootStore.create({ users: {} })
window.store = store

function App() {
  const inputRef = useRef()
  
  console.log(getSnapshot(store.todos))

  const handleSubmit = e => {
    e.preventDefault()
    const { value } = inputRef.current
    if (!value.trim()) return

    store.addTodo(Math.floor(Math.random() * 1000), value.trim())
    e.target.reset()
    inputRef.current.focus()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>MST Todo App</h1>
      </header>
      <div className="App-body">
        {values(store.todos).map(todo => (
          <div key={todo.id}>
            <input 
              style={todo.isDone ? { textDecoration: 'line-through' } : {}} 
              type="text"
              value={todo.name}
              onChange={({ target: { value } }) => todo.setName(value)}
            />
            <input type="checkbox" checked={todo.isDone} onChange={() => { todo.toggle() }} />
            <button onClick={() => { store.removeTodo(todo.id) }}>Remove</button>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <label>
            Create todo: <input ref={inputRef} type="text" placeholder="Type..." />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default observer(App);
