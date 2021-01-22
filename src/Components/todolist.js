import React, { useRef, useState, useEffect } from 'react'

import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import SearchIcon from '@material-ui/icons/Search';




function Todolist() {
    const [todos, setTodos] = useState([])
    const [searchTodo, setSearchTodo] = useState([])
    const [initial,setInitial]=useState(false)
    const [input, setInput] = useState({})
    const userinput = useRef(null)

    useEffect(() => {
        userinput.current.focus();
    });

    const handleChange = e => {
        setInitial(false)
        setInput({
            id: Math.floor(Math.random() * 1000),
            text: e.target.value
        })
    };

    function handleSubmit(e) {

        e.preventDefault()

        if (!input.text) {

            return;
        }

        const searchTodo = [...todos].filter(item => item.text.toLowerCase()=== input.text.toLowerCase())


        if (searchTodo.length === 0) {
            const newTodos = [input, ...todos];
            setTodos(newTodos);
        }
        else {
            setInitial(true)
            setSearchTodo(searchTodo)
        }
        setInitial(true)

        e.target.elements.text.value = ""
    }



    const handleRemove = id => {
         
        //     setInitial(true)
            const removed_todo = [...todos].filter(todo => todo.id !== id);
            setTodos(removed_todo)
        }
    


    return (

        <div>

            <h3>Welcome to ToDo Page!</h3>

            <div className="todo_block" >
                <div>
                    <form onSubmit={handleSubmit} className="todo-form" >
                        <input type='text' placeholder="Search ToDo" className="todo-input" onChange={handleChange} ref={userinput} name="text" />
                        <button className="todo-button"><SearchIcon style={{ fontSize: 'small' }} /></button>
                    </form>
                </div>

                <br />
                {initial&&todos.map((item, index) =>{
                     return   <div key={index} className="todo-row">
                            <input type='checkbox' className="strikethrough" />
                            <span>{item.text}</span>
                            <RemoveCircleIcon onClick={() => { handleRemove(item.id) }} />
                        </div>})}

                {!initial&&todos.filter((item) => {
                    if(input.text==="")
                    return item

                    else if(item.text.toLowerCase().startsWith(input.text.toLowerCase())) {
                        return item
                    }
                    
                })
                    .map((item, index) =>
                         <div key={index} className="todo-row">
                            <input type='checkbox' className="strikethrough" />
                            <span>{item.text}</span>
                            <RemoveCircleIcon onClick={() => { handleRemove(item.id) }} />
                        </div>)}


            </div>

        </div>
    )
}
export default Todolist








// {found&&searchTodo.filter((item)=>
//     {
//         if(item.text.toLowerCase().includes(value.text.toLowerCase())){
//             return item
//         }
//         else if(!(item.text.toLowerCase().includes(value.text.toLowerCase()))){
//             return value
//         }
//     })
//     .map((item, index) =>
//         <div key={index} className="todo-row">
//             <input type='checkbox' className="strikethrough" />
//             <span>{item.text}</span>
//             <RemoveCircleIcon onClick={() => { handleRemove2(item.id) }} />
//         </div>)}



