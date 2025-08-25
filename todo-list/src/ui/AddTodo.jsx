import React, { useState } from 'react'

const AddTodo = ({ addItem, list }) => {
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const formData = new FormData(e.target);
    let todo = formData.get('todo');

    if(list.includes(todo)) {
      setError('The ToDo Item already exists.');
      return;
    }

    addItem(todo);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='addForm'>
        <p>
          <label for='todo' className='field'>
            <span>Add New Item: </span><input type='text' id='todo' name='todo' required></input>
          </label>
          
          {error && <span className='error'>{error}</span>}
        </p>
        <button type='submit'>Save</button>
      </form>
    </>
  )
}

export default AddTodo