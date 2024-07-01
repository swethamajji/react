import { useState } from "react"
import Child from "./child"


function Parent(){

    const[isVisible,setIsVisible]=useState(false);

    const visibleHandler=()=>{
        setIsVisible(!isVisible);
    }
    return(
        <div>
            <h3>{isVisible?"welcome user":"no result found"}</h3>
            <button onClick={visibleHandler}>click to alter visible state</button>
            <Child/>
        </div>
    )
}
export default Parent