import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/home-screen"
import AboutScreen from "../screens/about-screen"
import ContactScreen from "../screens/contact-screen"
import SettingScreen from "../screens/setting-screen"
import InvalidScreen from "../screens/invalid-screen"
import { useReducer, useState } from "react"
import { createContext } from "react"
import ProductListing from "../components/products useEffect/productListing functional"
import { reducer } from "./jsFunctions"
import ProductDetailComponent from "../components/products useEffect/product details"




export const UserInfo=createContext();

function NavigationStack()
{
  const[username,setUsername]=useState("swetha");
  const[count,setCount]=useState(0);

  const initialState={
    count: 0,
  }

const[currentState,dispatch]=useReducer(reducer,initialState)

  const increaseCount=()=>{
    setCount(count+1);
  }
    return(
      <UserInfo.Provider value={{name:username,salary:200000,count:count,increaseCount:increaseCount,currentState:currentState,dispatch:dispatch}}>
<BrowserRouter>
<Routes>
    {/* static Routes */}
    <Route path="/" Component={HomeScreen}/>
    <Route path="/about" Component={AboutScreen}/>
    <Route path="/contact" Component={ContactScreen}/>
    <Route path="/settings" Component={SettingScreen}/>

<Route path="*" Component={InvalidScreen}/>
<Route
          path={":category/:productId"}
          Component={ProductDetailComponent}
        />

</Routes>
</BrowserRouter>
</UserInfo.Provider>
    )
}
export default NavigationStack







// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomeScreen from "../screens/home-screen";
// import AboutScreen from "../screens/about-screen";
// import ContactScreen from "../screens/contact-screen";
// import SettingScreen from "../screens/setting-screen";
// import InvalidScreen from "../screens/invalid-screen";
// import ProductDetailComponent from "../components/products/productDetails";
// import ProductListing from "../components/products useEffect/productListing functional";

// function NavigationStack() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* static Routes */}
//         <Route path="/" Component={HomeScreen} />
//         <Route path="/about" Component={AboutScreen} />
//         <Route path="/contact" Component={ContactScreen} />
//         <Route path="/settings" Component={SettingScreen} />

//         {/* Invalid Routes */}
//         <Route path="*" Component={InvalidScreen} />
//         {/* http://localhost:3000/category/productId */}
//         {/* Dynamic Routes */}
//         <Route
//           path={":category/:productId"}
//           Component={ProductListing}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default NavigationStack;