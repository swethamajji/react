import { useState } from "react"


const useCounter=(initialvalue=100,scale=1)=>{
const[count,setCount]=useState(initialvalue);
const incrementHandler=()=>{
setCount(count+scale)
}
const decrementHandler=()=>{
    setCount(count-scale) 
}
const resetHandler=()=>{
    setCount(0);
}
return[count,incrementHandler,decrementHandler,resetHandler]
}
export default useCounter;