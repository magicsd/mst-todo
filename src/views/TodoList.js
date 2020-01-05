import React from 'react';
import { values } from 'mobx'
import { observer } from 'mobx-react'
import TodoItem from './TodoItem';

const TodoList = ({ store }) => values(store.todos).map(todo => (
  <TodoItem key={todo.id} todo={todo} onRemove={() => store.removeTodo(todo.id)} />
))

export default observer(TodoList)