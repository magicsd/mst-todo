import React from 'react';
import { observer } from 'mobx-react'
import RootStore from './models/RootStore'
import Todo from './views/Todo'

import './App.css';

const store = RootStore.create({ users: {} })

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>MST Todo App</h1>
    </header>
    <Todo store={store} />
  </div>
)

export default observer(App);
