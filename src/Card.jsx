import React, { useState } from "react";

// onUpdate && 是有這個 props 才執行的意思
// Conditional rendering，語法範例：editable ? : "Cannot edit"，如果不能 editable，就印出 Cannot edit

export const Card = ({onCreate, onUpdate}) => {

    const [editable, setEditable] = useState(true);

    const handleChange = (e) => {
        onUpdate && onUpdate(e.target.value);
    }
    
    const handleCreate = () => {
        setEditable(false);
        onCreate && onCreate();
    }
    
    const handleCancel = () => {
        setEditable(true);
    }

    return (
        <div className="">
            <h1>Card</h1>
            <input type="text" disabled={!editable} onChange={handleChange} />
            {editable && <button onClick={handleCreate}> Create </button>}
            {!editable && <button onClick={handleCancel}> Cancel </button>}
        </div>
    )
}