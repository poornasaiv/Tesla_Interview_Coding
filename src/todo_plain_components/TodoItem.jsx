import React from 'react'

const TodoItem = (props) => {
  return (
    <div> 
        <span>{props.name}</span>
        <button onClick = {() => props.handleEdit(props.id, props.name)}>Edit</button>
        <button onClick = {() => props.handleDelete(props.id)}>Delete</button>
        <button onClick = {() => props.handleComplete(props.id)}>Mark as Complete</button>
    </div>
  )
}

export default TodoItem