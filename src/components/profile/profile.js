import { useState } from "react"
import Counter from "./counter";
import Button from "../button/button";


const Profile=()=>{
    const [name,setName]=useState("Swetha");
    const [isEmployed,setIsEmployed]=useState(false);
    const[employee,setEmployee]=useState({
        name:"swetha",
        salary:1000,
        designation:"react developer"
    })

    const percentageCal=(value,percentage)=>{
        return value+value*(percentage/100)
    }
    const incrementPercentage=50;
    const changeRole=()=>{
        setEmployee({...employee,designation:"Angular developer",salary:percentageCal(employee.salary,incrementPercentage),name:"akhi"})
    }
    const changeName=()=>{
setName("akhi")
    }
    const changeIsEmployeed=()=>{
        setIsEmployed(!isEmployed);
    }
    return(
        <>
        <h3>profile details</h3>
        <h3>User name:{name}</h3>
        <button onClick={changeName}>Change Name</button>
        <h3>Is Employes{isEmployed?"Yes":"No"}</h3>
        <button onClick={changeIsEmployeed}>Change employee status</button>
        {
            isEmployed && <Counter/>
        }
        <div>
            <h2>Employee Details</h2>
            <h4>
                {employee.name}</h4>
               <h4>{employee.salary}</h4>
               <h4> {employee.designation}
            </h4>
            <Button text="change role" onSmash={changeRole}/>
        </div>
        </>
    )
}
export default Profile