import {connect} from 'react-redux'
import Main from './Main'
import * as action from '../redux/actions'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

function mapStateToProps(state)
{ console.log("mapping states...",state)
    return state
}
 
function mapDispatchToProps(dispatch){
    console.log("mapping dispatch")
       return bindActionCreators(action,dispatch)
}
 
const App=withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))
 
export default App