
import React from 'react'
import Head from './head'
import { Component,lazy,Suspense } from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './Login'
import AddProduct from './addproduct'
import Edit from './edit'
import Todolist from './todolist'
import ErrorBoundary from './errorboundary'
const Product=lazy(()=>import('./Product'))

export const NameContext=React.createContext()

class Main extends Component{
    constructor(props){
        super(props)

        this.state={
            name:''
        }

        this.setname=this.setname.bind(this)
    }

    setname(username){
        this.setState({name:username})
    }

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
                onmove={(name)=>{
                    
                     this.props.requestApiToken()
                        history.push("/product")
                        this.setname(name)}}/>
                       
                
                <Head val={"footer"} />
                </div>

            )}/>





        <Route exact path="/product" render={({history})=>
            (
                <div>
                <ErrorBoundary>
                <Suspense fallback={<div>Loading....</div>}>
                <NameContext.Provider value={this.state.name}>
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
                {history.push("/")}} />
                </NameContext.Provider>
                </Suspense>
                </ErrorBoundary>
                <ErrorBoundary>
                <Head val={"footer"} />
                </ErrorBoundary>
                </div>
            )

        } />

       
        
        <Route exact path ="/product/create/" render={({history})=>
                (            
                    <div>
                    <Head val={"top"} />
                
                    <ErrorBoundary>
                    <AddProduct onadd={(newproduct)=>{
                        this.props.requestAddProduct(newproduct)
                        history.push("/product")  }}
                        onshowProducts={(offset,limit)=>{
                            this.props.requestApiProducts(offset,limit)}
                        }
                         {...this.props}/>
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

        <Route exact path='/todolist' render ={()=>
        <div>
            <Head val={"top"} />
            <Todolist/>
            <Head val={"footer"} />
        </div>
        }/>
        
        </div>
    )
}


}
export default Main
