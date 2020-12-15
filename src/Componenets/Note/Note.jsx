import React, { useState } from 'react';
import './Note.css'
import MapModal from '../MapModal/MapModal';
const Note = props => {

    const [visibility, setVisibility] = useState(false);
    const [visibilityLeaflet, setVisibilityLeaflet] = useState(false);
    const visibilityHandler = () => {
        setVisibility(!visibility);
    }
  
    return(
        <div className="note-container">
               {
                   visibility && <MapModal setVisibility={visibilityHandler} 
                   lat={props.content.lat} 
                   long={props.content.long} 
                   description={props.content.description}/>
               } 
             
                <div>category: {props.content.category}</div>
                <div> note: {props.content.text} </div>
                <button style={{backgroundColor:"red", border:"1px solid black"}} 
                onClick={visibilityHandler}>Check location details on Google MAPS API</button>
            
        
            
           
        </div>
    );
}

export default Note;