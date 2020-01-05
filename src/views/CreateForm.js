import React, { useRef } from 'react'
import { observer } from 'mobx-react'

const CreateForm = ({ store }) => {
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
    <form onSubmit={handleSubmit}>
      <label>
        <input required ref={inputRef} type='text' placeholder='Task name...' />
      </label>
      <button type='submit'>Add</button>
    </form>
  )
}

export default observer(CreateForm)
