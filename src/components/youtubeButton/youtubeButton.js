
import { Component } from "react";
import Greeting from "../greeting/greeting";
import Todos from "../todo/todo";

class YoutubeButton extends Component{
state={ //initialise the state
subscribeText:"Please subscribe",
subscribedText:"Thanks for subscribing",
issubscribe:false,
};

changeText=()=>{  //user defined method
console.log("hello");
//we need to change issubscribe flag to true
this.setState({ ///predefined method to alter the state
    issubscribe: !this.state.issubscribe, 
},()=>{
    console.log(this.state.issubscribe);
}
);
console.log(this.state.issubscribe);
};
render()
{
    return(
        <>
        <button onClick={this.changeText}>{this.state.issubscribe?this.state.subscribedText:this.state.subscribeText}
        </button>

        
        
           {this.state.issubscribe &&(
            <>
            <Greeting> swetha </Greeting>
           <Todos/>
           </>
        )}
        </>
    )
}
}
export default YoutubeButton;

//this:it is used to access any state method and prop
//we are using set state method to alter the issubscribe to true