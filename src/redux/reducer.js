
const initial={
    product:[],
   count:null
}
//the name of the function should be same as the name of the state=
const postReducer=function product(state=initial,action){
    console.log(`reducer call with ${action.type}​​​​​​​​ and data ${JSON.stringify(action.product)}​​​​​​​​`)

    switch(action.type)
    {
        case'RECIEVE_REMOVE_PRODUCT':  return{product:state.product.filter(product=>product.id!=action.id)
        }
    case'RECIEVE_API_ADDPRODUCT': return {product:[...state.product,action.product]}
    case'RECIEVE_API_PRODUCTS': return {product:action.product}
    case 'RECIEVE_UPDATE_PRODUCT': var afterUpdate=state.product.filter(products=>products.id!=action.product.id)
                   afterUpdate=[...afterUpdate,action.product]
                   afterUpdate.sort(function (x,y){
                     return x.id-y.id;
                   })
                console.log("reducer "+JSON.stringify(afterUpdate))
         return {product:afterUpdate,count:action.product.count}
    default: return state
    }
    

}

 
export default postReducer

