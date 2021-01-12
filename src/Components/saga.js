
import {all,call,put,takeLatest} from "redux-saga/effects"
import {REQUEST_API_DATA,REQUEST_API_ADDPRODUCT,REQUEST_REMOVE_PRODUCT,REQUEST_UPDATE_PRODUCT,receiveApiToken,receiveAddProduct, receiveApiProducts, REQUEST_API_PRODUCTS, receiveRemoveProduct,recieveUpdateProduct} from "../redux/sagaActions"
import {fetchToken,fetchProducts,AddProduct,deleteProduct,updateProduct} from './api'
 
function* getApiToken(action){
    console.log("hey i am saga")
    try{
        const token=yield call(fetchToken);
        console.log("token token  "+token)
        localStorage.setItem("token",token)
        yield put(receiveApiToken(token));
    }
    catch(e){
        console.log("i am also error" +e)
    }
}
function* getApiProducts(action){
   
    try{
        const products=yield call(fetchProducts,action.offset,action.limit);
        
        yield put(receiveApiProducts(products,products.offset,products.limit));
    }
    catch(e){
        console.log(" products i am also error" +e)
    }
}
function* getAddProduct(action){
    console.log(" new product saga")
    try{
        const newproduct=yield call(AddProduct,action.newproduct);
        console.log("newproduct  "+newproduct)
        yield put(receiveAddProduct(newproduct));
    }
    catch(e){
        console.log(" product error...." +e)
    }
}

function* getRemoveProduct(action){
    console.log("delete product saga")
    try{
        const product=yield call(deleteProduct,action.id);
        console.log("products...  "+product.id)
        yield put(receiveRemoveProduct(action.id));
    }
    catch(e){
        console.log(" users i am also error" +e)
    }
}

function* getUpdateProduct(action){
    console.log("delete product saga")
    try{
        const updatedproduct=yield call(updateProduct,action.updatedproduct);
        console.log("products...  "+updatedproduct)
        yield put(recieveUpdateProduct(updatedproduct));
    }
    catch(e){
        console.log(" users i am also error" +e)
    }
}


export default function* mySaga(){
    yield all([takeLatest(REQUEST_API_DATA,getApiToken), takeLatest(REQUEST_API_PRODUCTS,getApiProducts),
        takeLatest(REQUEST_API_ADDPRODUCT,getAddProduct),takeLatest(REQUEST_REMOVE_PRODUCT,getRemoveProduct),
        takeLatest(REQUEST_UPDATE_PRODUCT,getUpdateProduct)])
    //yield 
}


// import {call,put,takeLatest} from "redux-saga/effects"
// import {REQUEST_API_DATA,receiveApiToken} from '../redux/sagaActions'
// import {fetchToken} from "./api"
 
// function* getApiToken(action){
//     console.log("hey i am saga")
//     try{
//         const token=yield call(fetchToken);
//         console.log("token token  "+token)
//         yield put(receiveApiToken(token));
//     }
//     catch(e){
//         console.log("i am also error" +e)
//     }
// }
 
// export default function* mySaga(){
//     yield takeLatest(REQUEST_API_DATA,getApiToken);
// }
