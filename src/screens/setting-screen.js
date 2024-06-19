import { useContext } from "react"
import NavBar from "../components/navbar/navbar"
import { UserInfo } from "../navigation/navigation-stack"

function SettingScreen(){
const {increaseCount,count}=useContext(UserInfo);

    return(
        <div>
            <NavBar/>
            <h2>Welcome to SettingScreen{count}</h2>
            <button onClick={increaseCount}>Increased Count</button>
        </div>
    )
}
export default SettingScreen