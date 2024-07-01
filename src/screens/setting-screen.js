import { useContext } from "react"
import NavBar from "../components/navbar/navbar"
import { UserInfo } from "../navigation/navigation-stack"
import UseEffectExample from "../components/useEffectLeak/useEffectLeak";
import useCounter from "../components/customHooks/customhooks";
import { useDispatch, useSelector } from "react-redux";
import { borrowBookAction, returnBookAction } from "../redux/books/action";
import { userNameAction } from "../redux/books/profile/action";

function SettingScreen(){
const {increaseCount,count}=useContext(UserInfo);
const [age,incrementAge,decrementAge,resetAge]=useCounter(10,2)
const [salary,incrementSalary,decrementSalary,resetSalary]=useCounter(10000,2000)

const reduxData=useSelector((state)=>{
    return state;

})
console.log(reduxData,"reduxdatareduxdata");

const dispatch=useDispatch();

const borrowBook=()=>{
dispatch(borrowBookAction(5));
}

const returnBook=()=>{
    dispatch(returnBookAction(5))
}

const ChangeName=()=>{
    dispatch(userNameAction("akhi"))
}
    return(
        <div>``
            <NavBar/>
            <h2>Welcome to SettingScreen{count}</h2>
            <button onClick={increaseCount}>Increased Count</button>
            <UseEffectExample/>
            <h2>{age}</h2>
            <button onClick={incrementAge}>Increase age</button>
            <button onClick={decrementAge}>Increase age</button>
            <button onClick={resetAge}>Reset age</button>

            <h2>{salary}</h2>
            <button onClick={incrementSalary}>Increase salary</button>
            <button onClick={decrementSalary}>Increase salary</button>
            <button onClick={resetSalary}>Reset salary</button>

            <h2>Books Count {reduxData.totalBooks}</h2>

            <button onClick={borrowBook}>Borrow books from library</button>


            <button onClick={returnBook}>Return books from library</button>


            <h3>Book Details</h3>


            {reduxData.books.bookDetails.map((eachBook)=>{
                    return(
                        <>
                        <h3>{eachBook.name}</h3>
                        <h3>{eachBook.quantity}</h3>
                        </>
                    )
                })
            }
<h3>Profile details</h3>
<h5>{reduxData.profile.username}</h5>
<button onClick={ChangeName}>Change Name</button>
        </div>
    )
}
export default SettingScreen