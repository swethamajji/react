import { Component } from "react";
import Child from "./child";



class Unmounting extends Component{
    constructor(){
        super()
        this.state={
            childVisible:true,
        }
    }
    childVisible=()=>{
        this.setState({
childVisible:!this.state.childVisible,
        })
    }
    render()
    {
        console.log("parent rendering...");
        return(
            <>
<h3>Unmounting Phase</h3>
<button onClick={this.childVisible}>Child Hide</button>
{this.state.childVisible?<Child/>:null}

            </>
        )
    }
}
export default Unmounting