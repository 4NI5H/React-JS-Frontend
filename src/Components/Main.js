

import Head from './head'
import { Component,lazy,Suspense } from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './Login'
import LogOut from './Logout'
import AddProduct from './addproduct'
import Edit from './edit'
import ErrorBoundary from './errorboundary'
import { updateProduct } from './api'
const Product=lazy(()=>import('./Product'))

class Main extends Component{
// componentDidMount(){
//     console.log("mount....",this.props.token)
//     localStorage.setItem('token',this.props.token)
// }

render()
{
    console.log("i.m render")
    return (
        <div>
        <Switch>
        <Route exact path ="/" render={({history})=>
            (            
                <div>
                
                <Head val={"login"} />
                <Login
                onmove={()=>
                    { this.props.requestApiToken()
                        history.push("/product")}}/>
                       
                
                <Head val={"footer"} />
                </div>

            )}/>





        <Route exact path="/product" render={({history})=>
            (
                <div>
                <ErrorBoundary>
                <Suspense fallback={<div>Loading....</div>}>
                <Product {...this.props}
                onshowProducts={(offset,limit)=>{
                    this.props.requestApiProducts(offset,limit)}
                }
                ondelete={(id)=>{
                    this.props.requestRemoveProduct(id)
                    history.push("/product")
                   
                }
            }
            requestUpdateProduct={(updatedProduct)=>
                this.props.requestUpdateProduct(updatedProduct) }
                onroute={()=>
                {history.push("/logout")}} />
                </Suspense>
                </ErrorBoundary>
                <ErrorBoundary>
                <Head val={"footer"} />
                </ErrorBoundary>
                </div>
            )

        } />

        <Route exact path ="/logout" render={()=>
            (     <ErrorBoundary>       
                <LogOut/>
                </ErrorBoundary>

            )}/>
        
        <Route exact path ="/product/create" render={({history})=>
                (            
                    <div>
                    <Head val={"login"} />
                
                    <ErrorBoundary>
                    <AddProduct onadd={(newproduct)=>{
                        this.props.requestAddProduct(newproduct)
                        history.push("/product")}}
                         />
                         </ErrorBoundary>
                             
                    <Head val={"footer"} />
                    </div>
    
                )}/>

        <Route exact path ="/product/edit" render={({history})=>
                (            
                    <div>
                    <Head val={"login"} />
                    
                    <Edit onmove={()=>
                        {history.push("/product")}}/>
                        
                    <Head val={"footer"} />
                    </div>
    
                )}/>
                </Switch>
        
        </div>
    )
}


}
export default Main
