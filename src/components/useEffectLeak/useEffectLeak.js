import { useEffect } from "react"


const UseEffectExample=()=>{

const mouseCapture=(event)=>{

    console.log(event.clientX,"x-position mouse move");
    console.log(event.clientY,"y-position mouse move");
}

 useEffect(()=>{

window.addEventListener("mousemove",mouseCapture)

return()=>{
    window.removeEventListener("mousemove",mouseCapture)
}
    },[])
    return(
        <>
        <h3>Memory Leak Example</h3>
        </>
    )
}
export default UseEffectExample