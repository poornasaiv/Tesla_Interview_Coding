import React from 'react'
import { useContext } from 'react';
import { CountContext } from '../ContextAPI/CountContext';

const ContextDemoChild = () => {

    const countValue = useContext(CountContext);
    console.log(countValue.count)

    const handleCountInc = () => {
        countValue.setCount(countValue.count + 1);
    };

  return (
    <>
        <div>
            <div>Counter : {countValue.count}</div>
            <button onClick={handleCountInc}>Click to increment</button>
        </div>
    </>
  )
}

export default ContextDemoChild;