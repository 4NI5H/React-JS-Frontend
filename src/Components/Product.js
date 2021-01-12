import { useState, useCallback, useRef, useEffect,useMemo} from 'react'
import { Link } from 'react-router-dom'
import Edit from './edit'
import { Popover } from 'react-tiny-popover'


function Product(props) {
  
  const limit = 5
  const [show,setShow]=useState(false)
  const[offset,setOffset]=useState(0)
  const [items, setItems] = useState({})
  const [num,setNum]=useState(1)
  const [update, setUpdate] = useState(false)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [value,setValue]=useState(0)
  
  const load= useMemo(
    () => {
      console.log("memo.......................")
    handleLoad()
    },
    [num,offset],
  )

  const showProduct=useCallback(
    () => {
     return showproduct()
    },
    [items],
  )


  //number array for pagination
  const pageNumbers = [];
  let totalPosts = 25

  for (let i = 1; i <= Math.ceil(totalPosts / limit); i++) {
    pageNumbers.push(i);
  }

//displaying product function



  function showproduct() {
    props.onshowProducts(offset, limit)
  }
 
  //delete function

  function handleDelete(idvalue) {
    const id = idvalue
  
    props.ondelete(id)
    props.onshowProducts(offset, limit)
  }

  //update function

  function handleUpdate(item) {
    setUpdate(!update)
    setItems(item)
    console.log(items)

  }

  //pagination function
 
   
     
  function handleLoad() {
    console.log("hey im handleload.........")
    let x=(num-1)*5
    setOffset(x)
    props.onshowProducts(offset, limit)

  }

  //logout function

  function logout() {
    localStorage.removeItem("token")
    props.onroute()
  }
  
  //popover function

  function handlePopover(item,val) {
    setIsPopoverOpen(true)
    setItems(item)
    
    setValue(val)

  }

  const token=localStorage.getItem('token')
  if(token===null)
          {
              throw new Error("not valid login")
          }
          // {showProduct}

  return (
    <div>
      <div className="product">
        <p>Hey,Welcome to Product Page</p>
        <a onClick={()=> setShow(!show)} className="menu_icon" >&#9776; Menu</a>
        
      </div>
      <div>
      <div className="main">
        {show && <div  className="menu">
        <br/>
        <Link to="/product/create" className="links" >Add Product</Link>
        <p></p>
       <button onClick={()=>setUpdate(false)} className="menu_button" href="#">Products  {showproduct}  </button> 
      
       <br/>
       <button onClick={logout} className="menu_button" href="#">Logout</button>
       <br/>
        <button onClick={()=> setShow(false)} href="#" className="menu_button">Hide</button>
     </div>}
    
     {!update && <div>
        <div className="product-display">
          <table>
            <tr>
              <th >Serial No.</th>
              <th >Name</th>
              <th >Description</th>
              <th >Price</th>
              <th >Currency</th>
              <th>Expiry Date(yyyy-mm-dd)</th>
              <th>Operations</th>
            </tr>

{console.log("xvsdv......",props.product)}
            {props.product.map((item, index) =>

              <tr key={index}  >
                <td onClick={() => { handlePopover(item,(index + offset + 1)) }}>{index + offset + 1}</td>
                <td >{item.name}</td>
                <td >{item.description}</td>
                <td > {item.price}</td>
                <td >{item.currency}</td>
                <td>{item.expiry_date}</td>
                <td style={{ textAlign: 'center' }}>
                <button className="table-button" onClick={() => { handleUpdate(item) }} >Update</button>
                <button className="table-button" onClick={() => { handleDelete(item.id) }} >Delete</button></td>
                  </tr>

            )}
          </table>
        </div>

        <Popover
          isOpen={isPopoverOpen}
          position={['top','bottom']}
          reposition={true}
          onClickOutside={() => setIsPopoverOpen(false)}
          content={() => (
            <div className="popover-block">
            <p>{}Product Info</p>
            <p></p>
            <p style={{textAlign:'left'}}>{value}.{items.name}</p>
            <ul>
            <li>Product ID: {items.id}</li>
            <li>Description: {items.description}</li>
            <li>Price: {items.price}</li>
            <li>Currency: {items.currency}</li>
            </ul>
            </div>
          )}>
          <div></div>
        </Popover>


        <div classname="page-button">
          <ul className='pagination'>
            {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                <button onClick={() =>{setNum(number)
                   }
                } href='!#' className='page-link'>
                  {number}
                  {load}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>}
      </div>
      </div>
      <div>
        {update &&
          <Edit product={items} onUpdate={() => { setItems({}); setUpdate(!update) }} updateRequest={(updatedproduct) => props.requestUpdateProduct(updatedproduct, props.index)} />
        }

      </div>
    </div>

  )
}


export default Product

// constructor(props){
    //     super(props)

    //     let loggedin=false
    //     const token=localStorage.getItem("token")
    //     if(token) loggedin=true;

    //     this.state={
    //         loggedin
    //     }
    //     this.logout=this.logout.bind(this)
    //     this.getData=this.getData.bind(this)
    // }

        // async function getData(){
    //     Axios.post("http://localhost:5000/api/product")
    // }

    // if (loggedin===false)
    // {
    //     return <Redirect to="/logout"/>
    // }



//     <tr  key={index} >
//     <td>{index+1}</td>
//     <td>{item.name}</td>
//     <td>{item.description}</td>
//     <td>{item.price}</td>
//     <td>{item.currency}</td>
//    <td style={{textAlign:'center'}}>
//    <button className="table-button" onClick={()=>
//     {handleDelete(item.id)}} >Delete</button>
//    <button className="table-button" onClick={()=>handleUpdate(item.id)} >Edit</button></td>
//     </tr>



// props.products.product.length===index+1&&
// <tr ref={lastitem} key={index} >
// <td>{index+1}</td>
// <td>{item.name}</td>
// <td>{item.description}</td>
// <td>{item.price}</td>
// <td>{item.currency}</td>
// <td style={{textAlign:'center'}}>
// <button className="table-button" onClick={()=>
// {handleDelete(item.id)}} >Delete</button>
// <button className="table-button" onClick={()=>handleUpdate(item.id)} >Edit</button></td>
// </tr>
// }

 // const lastitem = useCallback(node => {
    //   if (observer.current) observer.current.disconnect()
    //   observer.current = new IntersectionObserver(entries => {
    //     if (entries[0].isIntersecting ) {
    //       setOffset(prevoffset => prevoffset + 10)
    //     }
    //   })
    //   if (node) observer.current.observe(node)
    // }, [offset])


    // const observer = useRef()



   