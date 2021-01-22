import React,{ useRef} from 'react'




function Login(props) {

    const user = useRef();
    const Password = useRef();
   

    function submit() {
        if (user.current.value && Password.current.value) {
            const username=user.current.value
            props.onmove(username)
        }

    }

    return (

       <div>
            <h3>Login Page</h3>
            <form className="Form" onSubmit={submit}>
                <input className="Input" type="text" placeholder="userName" ref={user} />
                <input className="Input" type="password" placeholder="Password" ref={Password} />
                <button className="Button">Login</button>
            </form>
            </div>
           
    )
}

export default (Login)


    // constructor() {
    // super()

    // let loggedin=false
    // const token=localStorage.getItem("token")
    // if(token) loggedin=true;
    // this.state={
    //     loggedin,
    //     error:""
    // }
    // this.submit= this.submit.bind(this)

    // }   

    // this.transition=this.transition.bind(this)


     // render(){
        //     if(this.state.loggedin){
        //             return <Redirect to="/Product"/>
        //           }


        // function submit(props){  

        //     const userName =user.current.value
        //     const password =Password.current.value
        //     console.log(userName,Password)
        //     if(userName&&password)
        //     {
        //        props.onmove()
        //     }

                // try{
                //     const token=await axios.post("http://localhost:5000/api/user/login",{userName,password})
                //     localStorage.setItem("token",token)
                //     setloggedin(!loggedin)
                // }

                // catch(err)
                // {
                //     console.log("Error")
                //     }

                // }}

    //    }

        // useEffect(()=>{
        //     if(loggedin){
        //     return <Redirect to="/Product"/>
        //     }
        // })


        // axios("http://localhost:5000/api/user/login", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //      userName:user.current.value,
        //      password:Password.current.value
        //     }),
        //   }).then((res) => {
        //       localStorage.setItem("token",res.data)
        //     console.log(res.data);
        //   })
        //   .catch((error)=>{
        //       console.log(error)
        //   })