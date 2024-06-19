

import { Component } from "react";

class Circle extends Component{
  state={
    circle:[],
    numberedCircle:0,
  }
  addcircle=()=>{
this.setState({
  circle:[...this.state.circle,0],
},()=>{
  this.setState({
    numberedCircle:this.state.circle.length,
  })
}
)
  }
  circleClicked=(index)=>{
   console.log("clicked",index,this.state.circle);
  
  }
  render()
  {
    return(
      <>
      <h3>Circle Count={this.state.circle.length}</h3>
      <button onClick={this.addcircle}>Add Circles</button>
{
  this.state.circle.map((eachCircle,index)=>{
    return(
      <div style={{border:"2px solid black",width:100,height:100,borderRadius:"50%",backgroundColor:eachCircle?"red":"green"}} onClick={this.circleClicked(index)}></div>
    )
  })
} 
      </>
    )
  }
}
export default Circle