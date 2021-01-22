import { useRef } from 'react'


export default function AddProduct(props){

    console.log("props.....",props.location.state.off,props.location.state.lim)

    const Name=useRef();
    const description=useRef();
    const price=useRef();
    const currency=useRef();
    const expirydate=useRef();

    const token=localStorage.getItem('token')
    if(token===null)
            {
                throw new Error("not valid login")
            }


   
   function handleSubmit()
    {
        
        const name=Name.current.value
        const Description=description.current.value
        const Price=price.current.value
        const Currency=currency.current.value
        const ExpiryDate=expirydate.current.value

        const newproduct={
            name:name,
            description:Description,
            price:Price,
            currency:Currency,
            expiry_date:ExpiryDate
        }

        if(name&&Description&&Price&&Currency&&ExpiryDate)
        {
        console.log(name,description,price,currency)   
         props.onadd(newproduct);
         console.log("function called...")
         props.onshowProducts(props.location.state.off,props.location.state.lim);
           
        }
    }
    


    return(
            <div>
            <h3>Enter Product Details</h3>
            <form className="Form" onSubmit={handleSubmit}>
            <input className="Input" type ="text" placeholder="Product Name" ref={Name}/>
            <input className="Input" type ="text" placeholder="Product Description" ref={description}/>
            <input className="Input" type ="text" placeholder="Product Price" ref={price}/>
            <input className="Input" type ="text" placeholder="Currency (ex: for India put INR)" ref={currency}/>
            <label style={{fontWeight:'bold'}}>Expiry Date</label>
            <input className="Input" type ="date" ref={expirydate} />
            <button className="Button">ADD</button>
            </form>
            </div>
        )
    }

