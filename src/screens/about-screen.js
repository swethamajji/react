import { useContext } from "react"
import NavBar from "../components/navbar/navbar"
import { UserInfo } from "../navigation/navigation-stack";

function AboutScreen()
{
    const{increaseCount,count}=useContext(UserInfo);

    return(
        <div>
        <NavBar/>
       <h2> Welcome to AboutScreen{count}</h2>
       <button onClick={increaseCount}>Increased count</button>
        </div>
    )
}
export default AboutScreen