import { useState, useCallback,  useMemo, useContext} from 'react'
import { Link } from 'react-router-dom'
import Edit from './edit'
import {NameContext} from './Main' 
import { Popover } from 'react-tiny-popover'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ArtTrackRoundedIcon from '@material-ui/icons/ArtTrackRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import popover_component from './popover_component'
import ListAltIcon from '@material-ui/icons/ListAlt';

const token = localStorage.getItem('token')

function Product(props) {

  const limit = 8
  const [show, setShow] = useState(false)
  const [offset, setOffset] = useState(0)
  const [items, setItems] = useState({})
  const [num, setNum] = useState(1)
  const [update, setUpdate] = useState(false)
  const [value, setValue] = useState(0)


  const {setIsPopoverOpen,isPopoverOpen,handlePopover}=props

  const name=useContext(NameContext)
  

 const load=useMemo(()=>
 handleLoad(),
 [num,offset])

  const showProduct = useCallback(
    () => {
      return showproduct()
    },
    [num],
  )


  //number array for pagination
  const pageNumbers = [];
  let totalPosts = 40

  for (let i = 1; i <= Math.ceil(totalPosts / limit); i++) {
    pageNumbers.push(i);
  }

  //displaying product function



  function showproduct() {
    console.log("calback........")
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
    let x = (num - 1) * limit
    setOffset(x)
    props.onshowProducts(offset, limit)

  }

  //logout function

  function logout() {
    localStorage.removeItem("token")
    props.onroute()
  }

  //popover function

  

  //goback function

  function goback() {
    window.history.back()
  }



  if (token === null) {
    throw new Error("not valid login")
  }


  return (
    <div>
      <div className="product">
        <div className="goback" >
          <a onClick={goback} className="goback_button" ><KeyboardBackspaceIcon style={{ color: 'black' }} /></a>

          <p>Hey {name},Welcome to Product Page</p>
        </div>
        {!show && <a onClick={() => setShow(!show)}  className="menu_icon"  >&#9776; </a>}
        {show && <a onClick={() => setShow(!show)}  className="menu_icon_flip" >&#9776; </a>}

      </div>
      <div className="main">
        {show && <div className="menu">
          <br />
          <div style={{ display: 'flex' }}>
            <AddCircleRoundedIcon className="Icons"/>
            <Link to={{ pathname: "/product/create",
                    state:{
                      off:offset,
                      lim:limit
                    }
           }}
            className="links"> Add Product</Link>
          </div>
          <p></p>
          <div style={{ display: 'flex' }}>
          <ArtTrackRoundedIcon style={{fontSize:30}} className="Icons" />
          <a onClick={() => setUpdate(false)} className="menu_button">  Products  {showProduct}</a>
          </div>
          <br />
          <div style={{ display: 'flex' }}>
           <ListAltIcon className="Icons"/>
          <Link to="/todolist" className="links"> ToDos</Link>
          </div>
          <br/>
          <div style={{ display: 'flex' }}>
          <ExitToAppRoundedIcon className="Icons"/>
          <a onClick={logout} className="menu_button" >Logout</a>
          </div>
          <br />
          <div style={{ display: 'flex' }}>
          <VisibilityOffIcon className="Icons" /> 
          <a onClick={() => setShow(false)} className="menu_button" > Hide</a>
          </div>
        </div>}

        {!update && <div>
          <div className="product-display">
            <table>
              <tbody>
                <tr>
                <th >Serial No.</th>
                <th >Name</th>
                <th >Description</th>
                <th >Price</th>
                <th >Currency</th>
                <th>Expiry Date(yyyy-mm-dd)</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>

              {props.product.map((item, index) =>

                <tr key={index}  >
                  <td onClick={() =>  {setItems(item)
                   setValue((index + offset + 1))
                    { handlePopover() }}}>{index + offset + 1}</td>
                  <td >{item.name}</td>
                  <td >{item.description}</td>
                  <td > {item.price}</td>
                  <td >{item.currency}</td>
                  <td>{item.expiry_date}</td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="table-button" onClick={() => { handleUpdate(item) }}><EditIcon /></button></td>
                  <td style={{ textAlign: 'center' }}> <button className="table-button" onClick={() => { handleDelete(item.id) }} ><DeleteIcon /></button></td>
               
                    </tr>
              )}
              </tbody>
            </table>
          </div>

          <Popover
            isOpen={isPopoverOpen}
            position={['top', 'bottom']}
            reposition={true}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={() => (
              <div className="popover-block">
                <p>{ }Product Info</p>
                <p></p>
                <p style={{ textAlign: 'left' }}>{value}.{items.name}</p>
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


          <div >
            <ul className='pagination'>
              {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                  <button onClick={() => {
                    setNum(number)
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

        <div className="update_product">
          {update &&
            <Edit product={items} onUpdate={() => { setItems({}); setUpdate(!update) }} updateRequest={(updatedproduct) => props.requestUpdateProduct(updatedproduct, props.index)} />
          }

        </div>
      </div>
    </div>

  )
}


export default popover_component(Product) 

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



