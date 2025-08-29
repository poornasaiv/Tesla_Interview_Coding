import React from 'react'
import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import TodoItem from './TodoItem'
import TodoEditItem from './TodoEditItem'

const TodoList = () => {
  
    let [todos, setTodos] = useState([]);
    let [input, setInput] = useState("");
    let [editId, setEditId] = useState(null);
    let [editInput, setEditInput] = useState("");
    let [status, setStatus] = useState(false);

    const handleTodoAdd = (name) => {
        setTodos(prevTodos => [...prevTodos, {todoName: name, todoId: uuid(), isComplete:false}]);
        setInput("");
        console.log(todos);
    };

    const handleEditTodo = (id, name) => {
        setEditId(id);
        setEditInput(name);
    };

    const handleSaveTodo = (id, name ) => {
        setTodos(prevTodos => prevTodos.map(todo => {
            if(id === todo.todoId)
            {
                return {...todo, todoName: name}
            }
            else{
                return todo;
            }
        }));

        setEditId(null);
    };

    const handleCancelTodo = () => {
        setEditInput("");
        setEditId(null);
    };

    const handleDeleteTodo = (id) => {
        let filterTodos = todos.filter(todo => {
            if(todo.todoId !== id)
            {
                return todo;
            }
        });

        setTodos(filterTodos);
    };

    const handleInputChange = (e) => { 
      setInput(e.target.value);
    };

    const handleEditInputChange = (e) => {
        setEditInput(e.target.value);
    };

    const handleCompleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.map(todo => {
            if(todo.todoId === id)
            {
                return {...todo, isComplete:true};
            }
            else
            {
                return todo;
            }
        }))
    };

    return (<>
            <div>
                <div>
                    <input type="text" value={input} placeholder="Enter the todo name" onChange={handleInputChange}/>
                    <button onClick = {() => handleTodoAdd(input)}>Click to Add</button>
                </div>
            </div>
            <div>
                <h3>Todos</h3>
                <div>
                    {todos.map(todo => {
                        return ( 

                            (todo.todoId === editId ?
                                    <TodoEditItem 
                                        key={todo.todoId}
                                        id={todo.todoId}
                                        value={editInput}
                                        handleEditInput={handleEditInputChange}
                                        handleSave={handleSaveTodo}
                                        handleCancel={handleCancelTodo}
                                    />
                                    :
                                    (!todo.isComplete && 
                                    <TodoItem 
                                        key={todo.todoId}
                                        id={todo.todoId} 
                                        name={todo.todoName} 
                                        handleEdit={handleEditTodo} 
                                        handleDelete={handleDeleteTodo} 
                                        handleComplete={handleCompleteTodo}
                                    />)
                            )
                            )
                    })}
                </div>
            </div>
        </>
        )
}

export default TodoList;