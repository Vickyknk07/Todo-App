import React from 'react'
import { useState } from 'react';

export default function AddTodo(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e)=>{
        e.preventDefault()
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }else{
            props.addTodo(title, desc);
            setTitle("")
            setDesc("")
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <htmlForm onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="htmlForm-label">Todo Title : </label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="htmlForm-control" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="htmlForm-label">Todo Description : </label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="htmlForm-control" id="desc"/>
  </div>
 
  <button type="submit" className="btn btn-sm btn-success" onClick={submit}>Submit</button>
</htmlForm>
        </div>
    )
}
