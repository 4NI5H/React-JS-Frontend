import React, { useRef, useState,useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';


 function Todoform(props) {
    const [input,setInput]=useState('')
    const userinput=useRef(null)

    useEffect(() => {
        userinput.current.focus();
      });

    const  handleChange = e => {
        setInput(e.target.value)
    };

    function handleSubmit(e)
    {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text: input
        });
        e.target.elements.text.value=""
    }


    return (
        <div>
             <form onSubmit={handleSubmit} className="todo-form" >
              <input type='text' placeholder="Search ToDo" className="todo-input" onChange={handleChange} ref={userinput} name="text" />
              <button className="todo-button"><SearchIcon style={{fontSize:'small'}}/></button>
            </form>
        </div>
    )
}
export default Todoform