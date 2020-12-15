import React, { useState } from 'react';
import'./NoteForm.css';

const NoteForm = props => {


    const [note, setText] = useState({
        category:"",
        text:"",
        lat:"",
        long:"",
        description:""
    });

    const changeHandler = e => {
        setText(prevText => {
            return (
                {
                    ...prevText,
                    [e.target.name]: e.target.value
                }
            )

        });
    }

    const submitHandler = e => {
        e.preventDefault();
        props.addNote(note);
        setText({
            category:"",
            text:"",
            lat:"",
            long:"",
            description:""
        })

    }
    return (
        <div className="container">
            <form onSubmit={submitHandler} className="form-container">
                <input type="text" placeholder="add note category" name="category" onChange={changeHandler} value={note.category} />
               {
                   note.category? null : <span style={{color:"red", fontSize:"14px"}}>category can't be empty</span>
               } 
                <textarea type="text" placeholder="add note content" name="text" rows={5} onChange={changeHandler} value={note.text} />
              {
                   note.text? null: <span style={{color:"red", fontSize:"14px"}}>text can't be empty</span>
               }
               <div style={{display:'flex', margin: '5px'}}>
               
                
                <input type="number" placeholder="add latitude" name="lat" onChange={changeHandler} value={note.lat} />
               
                 <input type="number" placeholder="add longitude" name="long" onChange={changeHandler} value={note.long} />
               
                 <input type="description" placeholder="add location description" name="description" onChange={changeHandler} value={note.description} />
              
               </div>
               <button disabled={!note.text || !note.category}>Add note</button>
            </form>
        </div>
    );
}

export default NoteForm;