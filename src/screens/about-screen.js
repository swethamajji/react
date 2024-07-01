// import { useContext, useEffect } from "react"
// import NavBar from "../components/navbar/navbar"
// import { UserInfo } from "../navigation/navigation-stack";

// import { DECREASE_COUNT, INCREASE_COUNT } from "../navigation/jsFunctions";
// import ParentComponent from "../components/usecallback/parent";
// import { useDispatch, useSelector } from "react-redux";
// import { productAsyncActions } from "../redux/products/action";

// function AboutScreen()
// {
//     // const{increaseCount,count,currentState,dispatch}=useContext(UserInfo);
//     // console.log(currentState,"cuurntstate123")
// const dispatch=useDispatch();
// const {products,loading,error}= useSelector((state)=>state.products)
// useEffect(()=>{
// dispatch(productAsyncActions)
// },[]);

// if(error){
//     return <h3>Something went wrong</h3>
// }else{


//     return(
//         <div>
//         <NavBar/>
//        {/* <h2> Welcome to AboutScreen{currentState.count}</h2> */}
//        <button onClick={()=>{dispatch({type:INCREASE_COUNT})
//     }}>Increased count</button>
//            <button onClick={()=>{dispatch({type:DECREASE_COUNT})
//     }}>Decreased count</button>

//     <ParentComponent/>
// {
//     loading?<h4>Please Wait</h4>:
//     <>
//     <div>
//         {products.map(eachProduct=>{
//             return(
//                 <>
// <h3>{eachProduct.title}</h3>
// <h3>{eachProduct.price}</h3>
//                 </>
//             )
//         })}
//     </div>
//     </>
// }

    
//         </div>
//     )
// }
// }
// export default AboutScreen







import React, { useEffect } from "react";

import AutoFocusInput from "../components/autoFocus/autoFocus";
import UseReducer from "../components/useReducer/useReducer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, productAsyncActions } from "../redux/products/action";
import NavBar from "../components/navbar/navbar";

function ContactScreen() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(productAsyncActions());
  }, []);

  const addToCartFn = (product) => {
    dispatch(addToCart(product));
  };
  if (error) {
    return <h3>Something went wrong</h3>;
  } else {
    return (
      <div>
        <NavBar/>
        {loading ? (
          <h4>Please wait</h4>
        ) : (
          <>
            <div>
              {products.map((eachProduct) => {
                return (
                  <>
                    <h3>{eachProduct.title}</h3>
                    <h3>{eachProduct.price}</h3>
                    <button onClick={() => addToCartFn(eachProduct)}>
                      Add to cart
                    </button>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ContactScreen;