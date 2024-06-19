import { Link, useNavigate } from "react-router-dom"

function InvalidScreen() {
     const navigate=useNavigate();
     const handledirect=()=>{
        const isNavigate=true;
        if(isNavigate){
        navigate("/")
        }
        else{

        }
     }
    return(
        <div>
            <h3>Invalid Screen, 404 error, page not found</h3>
            {/* <Link to={"/"}>Back to home</Link> */}
            <button onClick={handledirect}>click to home screen</button>
        </div>
    )
    
}
export default InvalidScreen