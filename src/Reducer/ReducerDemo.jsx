import React from 'react'
import { useReducer } from 'react'

const initial = {count: 0};

const reducer = (state, action) => {
    switch(action.type){
        case "inc": return {...state, count : state.count+1};
        case "dec": return {...state, count: state.count-1};
    }

}
const ReducerDemo = () => {

    let [state, dispatch] = useReducer(reducer, initial);

    return (
        <div>
            <h3>Count : {state.count}</h3>
            <button onClick={()=>dispatch({type: 'inc'})}>+</button>
            <button onClick={()=>dispatch({type: 'dec'})}>-</button>
        </div>
    )
}

export default ReducerDemo;