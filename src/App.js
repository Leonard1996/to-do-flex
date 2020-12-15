import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NoteForm from './Componenets/NoteForm/NoteForm';
import uuid from 'react-uuid'
import Note from './Componenets/Note/Note';


function App() {

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("")

  const addNote = note => {
      setNotes(prevNotes => [...prevNotes, note]);
  }

  const filterHandler = e => {
    setSearch(e.target.value)
    
  
  }
  return (
    <div>
      <NoteForm   addNote={addNote} />
      <div className="main-container">
       
        
          <input type="text" onChange={filterHandler} value={search} placeholder="filter by category..."/>
            {
      
              notes.filter(note => search==="" || note.category.includes(search)).map(note =><Note key={uuid()} content={note}/>)
             
            }
            
      </div>
     
      
    </div>
  );
}

export default App;
