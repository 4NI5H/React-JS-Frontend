import { useState,useRef } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


function Edit (props){

    const Id=useRef();
    const Name=useRef();
    const Description=useRef();
    const Price=useRef();
    const Currency=useRef();
    const expirydate=useRef();

    

 
     function submitform()
    {  
        
        
        const name=Name.current.value
        const description=Description.current.value
        const price=Price.current.value
        const currency=Currency.current.value
        const ExpiryDate=expirydate.current.value

        const updatedproduct={
            id:props.product.id,
            name:"",
            description:"",
            price:"",
            currency:"",
            expiry_date:""
        }

        if(name)
        updatedproduct.name=name;
        else updatedproduct.name=props.product.name;
 
        if(description)
           updatedproduct.description=description;
        else updatedproduct.description=props.product.description;
 
        if(price)
           updatedproduct.price=price;
        else updatedproduct.price=props.product.price;
 
        if(currency)
           updatedproduct.currency=currency;
        else updatedproduct.currency=props.product.currency;

        if(ExpiryDate)
        updatedproduct.expiry_date=ExpiryDate;
        else updatedproduct.expiry_date=props.product.expiry_date
        
       

        props.updateRequest(updatedproduct)
        props.onUpdate()
    
    }


       

        return(
            <div>
            <h3>Update Product Details Here!</h3>
            <form className="Form" onSubmit={submitform}>
            <input className="Input" type ="text"  defaultValue={props.product.name} ref={Name} />
            <input className="Input" type ="text"   defaultValue={props.product.description} ref={Description} />
            <input className="Input" type ="text"  defaultValue={props.product.price} ref={Price} />
            <input className="Input" type ="text"  defaultValue={props.product.currency} ref={Currency}  />
            <label style={{fontWeight:'bold'}}>Expiry Date</label>
            <input className="Input" type ="date" ref={expirydate} defaultValue={props.product.expiry_date}/>
            <button className="Button" onClick={submitform}>Submit</button>
            </form>
            </div>
            )
        }
    
    

export default Edit

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

    // placeholder="Change Product Name"
    // placeholder="Change Product Description"
    // placeholder="Change Product Price"
    // placeholder="Currency (ex: for India put INR)"

    // onChange={handlechange}