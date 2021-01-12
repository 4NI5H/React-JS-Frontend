 
export function requestApiToken(token){
 
       return {
         type:'REQUEST_API_DATA',
       }
}

export function requestApiProducts(offset,limit){
    
         return {
           type:'REQUEST_API_PRODUCTS',
           offset:offset,
           limit:limit
         }
  }

  export function requestAddProduct(newproduct){
    
      return { type :'REQUEST_API_ADDPRODUCT',
              newproduct:newproduct
               
            }
}
 
 export function requestRemoveProduct(id){
   return {
     type:'REQUEST_REMOVE_PRODUCT',
     id:id
   }
 }

 export function requestUpdateProduct(updatedproduct){
   return {
     type:'REQUEST_UPDATE_PRODUCT',
     updatedproduct:updatedproduct
   }
 }