import React from 'react'

const TodoEditItem = (props) => {
  return (
    <div> 
        <input type="text" value={props.value} onChange={props.handleEditInput}/>
        <button onClick = {() => props.handleSave(props.id, props.value)}>Save</button>
        <button onClick = {props.handleCancel}>Cancel</button>
    </div>
  )
}

export default TodoEditItem