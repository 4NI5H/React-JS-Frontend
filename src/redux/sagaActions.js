export const REQUEST_API_DATA="REQUEST_API_DATA"
export const RECEIVE_API_DATA="RECEIVE_API_DATA"
export const REQUEST_API_PRODUCTS="REQUEST_API_PRODUCTS"
export const RECIEVE_API_PRODUCTS="RECIEVE_API_PRODUCTS"
export const REQUEST_API_ADDPRODUCT="REQUEST_API_ADDPRODUCT"
export const RECIEVE_API_ADDPRODUCT="RECIEVE_API_ADDPRODUCT"
export const REQUEST_REMOVE_PRODUCT="REQUEST_REMOVE_PRODUCT"
export const RECIEVE_REMOVE_PRODUCT="RECIEVE_REMOVE_PRODUCT"
export const REQUEST_UPDATE_PRODUCT="REQUEST_UPDATE_PRODUCT"
export const RECIEVE_UPDATE_PRODUCT="RECIEVE_UPDATE_PRODUCT"


export const receiveApiToken=token=>(
    {
        type:RECEIVE_API_DATA,
        token:token
    }
)

export const receiveApiProducts=(products,offset,limit)=>(
    {
        type:RECIEVE_API_PRODUCTS,
        product:products,
        count:products.count,
        offset:offset,
        limit:limit
    }
)

export const receiveAddProduct=newproduct=>(
    
    {   
        type:RECIEVE_API_ADDPRODUCT,
        product: newproduct

    }
)

export const receiveRemoveProduct=id=>(
    {
        type:RECIEVE_REMOVE_PRODUCT,
        id:id
    }
)

export const recieveUpdateProduct=updatedproduct=>(
    {
        type:RECIEVE_UPDATE_PRODUCT,
        product:updatedproduct
    }
)