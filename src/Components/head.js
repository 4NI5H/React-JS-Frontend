
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function goback()
{
    window.history.back()
}


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
    if(props.val==="top")
    {
        return (
            <div className="login">
                <div className="goback" >
                <a onClick={goback} className="goback_button" ><KeyboardBackspaceIcon/></a>
                </div>
            </div>
        )
    }
}

export default Head