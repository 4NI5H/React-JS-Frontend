import axios from 'axios'




//userlogin API call
export const fetchToken=async ()=>{
   try{ console.log("calling api")
  
   const config={ method:"POST",
   
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify({
     firstName:"Anish",
     lastName:"Kaushal",
     role:"Developer",
     country:"India"
   })
}
  return axios("http://localhost:5000/api/user/login",config).then((res)=>{
 
     return JSON.stringify(res.data.token)})
   }
   catch(e){
       console.log("I am Error"+e)
   }
}



 //fetch product api call
export const fetchProducts=async (offset,limit)=>{
   try{ console.log("calling  product api")
  //  const token=localStorage.getItem('token')
   console.log("offset.....",offset,limit)

  const off=Number(Math.floor(offset/limit)+1)
   return axios.get(`http://localhost:3000/products?_page=${off}&_limit=${limit}`,
   {
      
  },  {headers: { "Content-Type": "application/json"
}}).then((res) => {
   
   return res.data})
   
 
   }
   catch(e){
       console.log("I am Error   "+e)
   }
}



//add product API
export const AddProduct=async (newproduct)=>{
  console.log("ADD product api called..............",newproduct)

  try{
    // const token=localStorage.getItem("token")
     return axios.post("http://localhost:3000/products", {
      name:newproduct.name,
      description:newproduct.description,
      price:newproduct.price,
      currency:newproduct.currency,
      expiry_date:newproduct.expiry_date
  },  {headers: { "Content-Type": "application/json" 
}}).then((res) => {
   
   return res.data})
  
  }
  
  catch(e){
      console.log("API Error..."+e)
  }
}





//deleteproduct API

export const deleteProduct=async (id)=>{
  try{ console.log("calling  delete product api....id:",id)
  const token=localStorage.getItem("token")
  
  const config={ method:"DELETE",
  
  headers:{"Content-Type":"application/json",
         "authorization":JSON.parse(token)},
 }

 return axios(`http://localhost:3000/products/${id}`,config).then((res)=>{
 
    return res.data})
    
  //return a
  }
  catch(e){
      console.log("I am Error"+e)
  }
}


// update product api

export const updateProduct=async (updatedproduct)=>{
  try{ 
    console.log("update product api.........  "+updatedproduct)
    // const token=localStorage.getItem("token")
    
     return axios.put(`http://localhost:3000/products/${updatedproduct.id}`, {
      name:updatedproduct.name,
      description:updatedproduct.description,
      price:updatedproduct.price,
      currency:updatedproduct.currency,
      expiry_date:updatedproduct.expiry_date
    },
      {headers: { "Content-Type": "application/json" 
}}).then((res) => {
  
   return res.data})
}
  
   catch(error){
    console.log("update api error........",error);
  }


  }








// import axios from 'axios'
// export const fetchToken=async ()=>{
//    try{ console.log("calling api")
//    const token="token"
//    const config={ method:"POST",
   
//    headers:{"Content-Type":"application/json",
//           "authorization":token},
//    body:JSON.stringify({
//      firstName:"Seema",
//      lastName:"Devi",
//      role:"role",
//      country:"india"
//    })
//   }
//   //var a="hoho"
//   return axios("http://localhost:5000/api/user/login",config).then((res)=>{
//   console.log("after api call   "+JSON.stringify(res.data.token))
//      return JSON.stringify(res.data.token)})
     
//    //return a
//    }
//    catch(e){
//        console.log("Error"+e)
//    }
// }
 
    //fetch api
    // return axios("http://localhost:5000/api/product",config)
    // .then((res)=>{
    // console.log("after api call   "+JSON.stringify(res.data))
    //    return res.data})

//     const config={ method:"POST",
   
//     headers:{"Content-Type":"application/json",
//            "authorization":JSON.parse(token)},
//        data:{
//              offset:offset,
//              limit:limit
//            }       
//  }


// , "authorization":JSON.parse(token)