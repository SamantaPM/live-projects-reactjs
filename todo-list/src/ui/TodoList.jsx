import { useState } from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [list, setList] = useState([])

  const handleRemove = (key) => {
    setList((prev) => prev.filter((val, ind) => ind !== key ));
  }

  return (
    <>
      <h1>Todo List</h1>
      {list.length === 0 ? 
        (<strong className='no-todos'>No todos yet</strong>)
      : (
        <ul>
          {list.map((item, key) => (
            <TodoItem key={key} todo={item} deleteItem={() => handleRemove(key)}/>
          ))}
        </ul>
      )
      }
      <AddTodo list={list} addItem={(todo) =>  setList((prev) => [...prev, todo])} />
    </>
  )
}

export default TodoList