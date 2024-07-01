import { useCallback, useState } from "react";
import Button from "../button/button";


function ParentComponent(){

    const[age,setAge]=useState(24);
    const[salary,setSalary]=useState(1000);

    const increaseSalary=useCallback(()=>{
        setSalary(salary+1000);
    },[salary]);
    
    const increaseAge=
    useCallback(()=>{
        setAge(age+1);
    },[age])

    return(
        <div>
            <h2>current Age {age}</h2>
<Button text={"increase age"} onSmash={increaseAge}/>

            <h2>current Salary{salary}</h2>
            <Button text={"increase salary"} onSmash={increaseSalary}/>
        </div>
    )
}
export default ParentComponent