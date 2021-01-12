import react from 'react';


function Head(props) {


if(props.val==="footer")
    {
        return (
            <div className="footer">
            </div>
            
        )
    }
    if(props.val==="login")
    {
        return (
            <div className="login">
           
            </div>
        )
    }
}

export default Head