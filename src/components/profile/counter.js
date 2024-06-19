import { useState } from "react";
import Button from "../button/button";



const Counter=()=>{
    const[count,setCount]=useState(0);

    // const incrementHandler=()=>{
    //     setCount(count + 1);
    // };
    // const decrementHandler=()=>{
    //     if(count>0){
    //     setCount(count-1);
    //     }else{
    //         alert("count is 0")
    //     }
    // }
    // const resetHandler=()=>{
    //     setCount(0);
    // }
    const countHandler=(action,value)=>{
switch (action) {
    case "INCREMENT":
        setCount(count+value)
        break;
        case "DECREMENT":
            if(count>0){
                    setCount(count-value);
                    }else{
                        alert("count is 0")
                    }
                    break;
              case "RESET":
                setCount(0);
                break;
    default:
        break;
}
    }
    return(
        <>
        <h3> Counter App</h3>
        <h3>Current Count Value{count}</h3>
        {/* <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button> */}


        {/* <button onClick={()=>countHandler("INCREMENT",10)}>Increment</button>
        <button onClick={()=>countHandler("DECREMENT",10)}>Decrement</button>
        <button onClick={()=>countHandler("RESET")}>Reset</button> */}


        <Button text="Increment" onSmash={()=>countHandler("INCREMENT",10)}/>
        <Button text="Decrement" onSmash={()=>countHandler("DECREMENT",10)}/>
        <Button text="Reset" onSmash={()=>countHandler("RESET")}/>
        </>
    )
}
export default Counter;