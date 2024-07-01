import AutoFocus from "../components/autoFocus/autoFocus"
import useTarget from "../components/customHooks/customHook2"
import NavBar from "../components/navbar/navbar"
import Parent from "../components/react-memo/parent"
import UseMemo from "../components/useMemo/useMemo"
import UseReducer from "../components/useReducer/useReducer"

function ContactScreen()
{
    const[target,increaseTarget]=useTarget();
    return(
        <div>
            <NavBar/>
            <h2>Welcome to ContactScreen</h2>
    <UseReducer/>
            <AutoFocus/>
            <UseMemo/>
            <Parent/>
            <h2>{target}</h2>
            <button onClick={increaseTarget}>Increase Tragets</button>

        </div>
    )
}
export default ContactScreen