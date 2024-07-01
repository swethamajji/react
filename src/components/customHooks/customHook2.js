import { useState } from "react"


const useTarget=()=>{
    const[target,setTarget]=useState(0);
    const increaseTarget=()=>{
        setTarget(target+5);
    }
    return[target,increaseTarget];
}
export default useTarget;