import React from "react";

 const Button=(prop)=>{
    console.log("button component rerendering...");
    console.log(prop);
    const {text,textColor="yellow",onSmash}=prop;//here textColor="yellow" is default color if users did not given any color it takes yellow color
    //text="hello"...not possible bcoz it is immutable
    return(
        
        <button style={{color:textColor,backgroundColor:"green"}}onClick={onSmash}>{text}</button>
    //onClick changed to onSmash and used   
    
    )
}
export default React.memo(Button);