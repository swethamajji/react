import React from "react";


function Child(){
    console.log("child re-rendering.....");
    return(
    
        <h4> Child component</h4>
    )
}
export default React.memo(Child)