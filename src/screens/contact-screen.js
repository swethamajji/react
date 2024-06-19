import AutoFocus from "../components/autoFocus/autoFocus"
import NavBar from "../components/navbar/navbar"
import UseReducer from "../components/useReducer/useReducer"

function ContactScreen()
{
    return(
        <div>
            <NavBar/>
            <h2>Welcome to ContactScreen</h2>
            {/* <UseReducer/> */}
            <AutoFocus/>
        </div>
    )
}
export default ContactScreen