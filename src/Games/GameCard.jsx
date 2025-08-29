import React from 'react'
import { useState } from 'react';
import "./styles.css"
const GameCard = (props) => {
    const [name, setName] = useState(props.name);
    const [tempName, setTempName] = useState(name);
    const [edit, setEdit] = useState(false);
    const [stock, setStock] = useState(props.inStock);
    const [tempStock, setTempStock] = useState(stock);

    const handleEdit = () => {
        setEdit(true);

    }

    const handleSave = () => {
        setName(tempName);
        setStock(tempStock);
        setEdit(false);
    }

    const handleCancel = () => { 
        setTempName(name);
        setEdit(false);
        setTempStock(stock);
    }

    
    return (
     <div className="card">
        {edit ? 
            (<>
                <input type="text" value={tempName} onChange={e=>setTempName(e.target.value)}/>
                <input type="checkbox" checked={tempStock} id={props.id} onChange={e=>setTempStock(e.target.checked)}/>
                <label htmlFor={props.id}>In Stock</label>
                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </>)
            :
            (<>
                <div>{name}</div>
                {stock ? <label htmlFor={props.id}>In Stock</label> : <label htmlFor={props.id}>Out of Stock</label>}
                <div>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            </>)
    
        }   
    </div>
  )
}

export default GameCard;