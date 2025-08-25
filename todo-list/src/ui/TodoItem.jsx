import React from 'react'

const TodoItem = ({todo, deleteItem}) => {
  return (
    <li>
      <span>{todo}</span> 
      <button onClick={deleteItem}>Remove</button>
    </li>
  )
}

export default TodoItem