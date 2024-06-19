import { Component, PureComponent } from "react";



class Child extends PureComponent{
    componentWillUnmount(){
        alert("component unmounting");
    }
    render(){
        console.log("child rendering....");
        return(
            <>
            <div> Child</div>
            </>
        )
    }
}
export default Child