import {Component} from 'react'
import {Redirect} from 'react-router-dom'

function LogOut(props){
   
    localStorage.removeItem("token")

    
    
        return (
        <Redirect to="/" />
        )
    
   

}
export  default LogOut

// constructor(props)
// {
//     super(props)
    
    
// }
