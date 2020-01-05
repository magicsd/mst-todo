import React from 'react';
import { getSnapshot } from 'mobx-state-tree'

import Todo from './models/Todo'
import User from './models/User'
import RootStore from './models/RootStore'

import './App.css';

const john = User.create()
const eat = Todo.create({ name: 'Eat'})
const store = RootStore.create({ users: {} })

function App() {
  
  console.log(getSnapshot(store))
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
