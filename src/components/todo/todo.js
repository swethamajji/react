import { Component } from "react";



class Todos extends Component{
    state={
todos:["Apple","kiwi"],
newFruit:"Banana",
    }

    addnewFruit=()=>{
        this.setState({
            todos:[...this.state.todos,this.state.newFruit],
        })
    }

    deleteFruit=(index)=>
        {

            const newList=this.state.todos.filter((each,i)=>{
return index!==i
            })


        //     const newList=this.state.todos;
        //   const newTodos =newList.splice(index,1);
        //   console.log(newList,"newList");
          this.setState({
            todos:newList,//this is to update/modify the todo state
          });
        };

        updateFruit=(index)=>{
//update the selected fruit in the existing list
const random ="watermelon";
console.log(this.state.todos);
const updatedTodos=this.state.todos.map((eachfruit,i)=>{
    if(index===i)
        {
            return random
        }
        else{
            return eachfruit
        }

})
    this.setState({
        todos:updatedTodos,
    })
        }
    render()
    {
        return(
            <>
            <button onClick={this.addnewFruit}>Click to add new Fruit</button>
<ol>
{this.state.todos.map((eachTodo, index) => {
return(
    <>
    <li>{eachTodo}</li>
    <button onClick={()=>this.deleteFruit(index)}>Delete</button>
    <button onClick={()=>this.updateFruit(index)}>update</button>
    </>
)

})};
    </ol>
            </>
        )
    }
}
export default Todos;



//to alter the state we need to use "setState method" this is only in "class based component"
//we will use JSX in only return part