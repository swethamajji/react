import { useMemo, useState } from "react";



const UseMemo=()=>{
    const[age,setAge]=useState(24);
    const[salary,setSalary]=useState(1000);

    const increaseSalary=()=>{
        setSalary(salary+1000);
    }
    const increaseAge=()=>{
        setAge(age+1);
    }
 
const isEven= useMemo(()=>{
    console.log("expensive calculation is happening........");
    let even=age%2===0;
    return even?"EVEN":"ODD";
},[age])

    return(
        <>
<h2>Age details</h2>
<h3>My current age {age} ,age number is {isEven}</h3>
<button onClick={increaseAge}>Increase my age </button>


<h2>Salary details</h2>
<h3>My current salary{salary}</h3>
<button onClick={increaseSalary}>Increase my salary</button>

        </>
    )
}
export default UseMemo;