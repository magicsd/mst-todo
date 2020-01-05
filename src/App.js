import React from 'react';
import { getSnapshot } from 'mobx-state-tree'
import Todo from './models/Todo'
import User from './models/User'
import logo from './logo.svg';
import './App.css';

function App() {
  const john = User.create()
  const eat = Todo.create({ name: 'Eat'})

  console.log(getSnapshot(john))
  console.log(getSnapshot(eat))

  return (
    <div className="App">
      <header className="App-header">
        <h1>MST Todo App</h1>
      </header>
      <div>The Content</div>
    </div>
  );
}

export default App;
