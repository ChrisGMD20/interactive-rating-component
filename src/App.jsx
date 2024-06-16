import React from 'react'
import { useState } from 'react';
import CommentCard from "./components/CommentCard";
import ThanksCard from './components/ThanksCard';

export default function App(){
    const [selection, setSelection] = useState(null)
    const [submition, setSubmition] = useState(false)

    function handleClick(e){
       const selected = e.target.innerText
       setSelection(selected)
       console.log(selection)
    }

    function handleSubmit(){
        setSubmition((submition)=>!submition)
    }

    return (
        <>
            {submition? 
                <ThanksCard selection={selection}/> :
                <CommentCard selection={selection} handleClick={handleClick} handleSubmit={handleSubmit}/>
            }
        
        </>


    )
}