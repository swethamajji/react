

import { Component } from "react";

import "../table/table.css";
class Data extends Component{
    state={
        React:null,
        Java:null,
        Sql:null,
        All:null,
    };

    read=()=>{
        this.setState(
            {
                React:["swetha,","geetha,","bhanu,"],
            }
        )
    }

    write=()=>{
        this.setState({
            Java:["akshaya,","raju,","reshma,"]
        })
    }
     
    under=()=>{
        this.setState({
            Sql:["archana,","sulthan,"]
        })
    }
    all=()=>{
        this.setState({
            All:["akshaya,","raju,","reshma,","archana,","sulthan,","swetha,","geetha,","bhanu,"]
        })
    }
    render()
    {
        return(
            <>

            {/* <button onClick={this.read}>reactdeveloper</button>
            <button onClick={this.write}>javadeveloper</button>
            <button onClick={this.under}>Sqldeveloper</button>
            {this.state.React}
            {this.state.Java}
            {this.state.Sql} */}
            <table>
                <tr>
                    <td><button onClick={this.read}>React developers</button></td>
                    
                    <td>{this.state.React}</td>
                </tr>
                <tr>
                    <td><button onClick={this.write}>Java developers</button></td>
                    <td>{this.state.Java}</td>
                </tr>
                <tr>
                    <td><button onClick={this.under}>Sql developers</button></td>
                    <td>{this.state.Sql}
                    </td>
                </tr>
                <tr>
                    <td><button onClick={this.all}>All developers</button></td>
                  <td>  {this.state.All}
                    </td>
                </tr>
            </table>

            </>
        )
        
    }
}
export default Data