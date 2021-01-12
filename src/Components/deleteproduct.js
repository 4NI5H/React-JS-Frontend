import { useState,useRef} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


function Delete(props){

    // const [loggedin, setloggedin]=useState(()=>{return false})
    const Id=useRef()

    function submit(event)
    {
        // const token=localStorage.getItem("token")
        // if(token)
        // { setloggedin(!loggedin)}

    //     event.preventDefault();
    //     const id=ID.current.value
    //     if(id)
    //     {
    //         axios.delete(`http://localhost:5000/api/product/${id}`)
    //         props.onmove()
    //     }
    // }
    }
    
    
        // if (loggedin===false)
        // {
        // return <Redirect to="/"/>
        // }

        return(
            <div>
            <h3>Enter Product Id</h3>
            <form className="Form" onSubmit={submit}>
            <input className="Input" type ="text" placeholder="Product Id" ref={Id} />
            <button className="Button">Submit</button>
            </form>
            </div>
            )
        
    

}
export default Delete


// constructor(){
    //     super()
        
    //     let loggedin=false
    //     const token=localStorage.getItem("token")
    //     if(token) loggedin=true;

    //     this.state={
    //         loggedin
    //     }
    //     this.press=this.press.bind(this)
    // }
