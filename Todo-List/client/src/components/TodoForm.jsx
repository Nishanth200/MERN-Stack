import React from 'react'
import { useState } from 'react'

export const TodoForm = () => {

    const[text,setText] = useState("");
  
    const onFormSubmit = () =>{

    }

    const onInputChange = (e) =>{
            
            setText(e.target.value);
    }

  return (
    <form action="" onSubmit={onFormSubmit}>
        <input type="text" placeholder='Enter New Todo..' className='input' onChange={onInputChange}/>
    </form>
  );
}
