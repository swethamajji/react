// import Table from "./components/table/table.js"
// import Image from "./components/image/image.js"
// import Form from "./components/form/form.js"
// import Button from "./components/button/button.js"
// import List from "./components/list/list.js"
// function Hello()
// {
//   return(
//     <div>
//       <h1>hello world</h1>
//       <Table/>
//       <Image/>
//       <Form/><br/>
//       <Button/>
//       <List/>
//     </div>
//   )
// }
// export default Hello

import { Table } from "react-bootstrap";
import Button from "./components/button/button";
import Circle from "./components/circleButton/circle";
import Heading1 from "./components/classComponent/heading";
import Data from "./components/datafilter/data";
import Greeting from "./components/greeting/greeting";
import List from "./components/list/list";
import ProductListing from "./components/productListing fetch axios/productListing";
import Todos from "./components/todo/todo";
import YoutubeButton from "./components/youtubeButton/youtubeButton";
import Lifecycle from "./components/lifecycles/lifecycle";
import Unmounting from "./components/lifecycles/parent";
import Profile from "./components/profile/profile";
import Uncontrolled from "./components/forms/uncontrolled";
import ProductListingFunctional from "./components/products useEffect/productListing functional";
import Spinner from "./components/spinners/spinners";
import NavigationStack from "./navigation/navigation-stack";
import Controlled from "./components/forms/controlled";
import AutoFocus from "./components/autoFocus/autoFocus";
import UseEffectEx2 from "./components/UseEffect/useEffect";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/store";






// import { ProgressBar, Spinner } from "react-bootstrap"
// import AccordionComponent from "./components/accordion/accordion"
// import HeadingComponent from "./components/classComponent/heading"
// import NavBar from "./components/navbar/navbar"
// import Table from "./components/table/table.css"
// import Modals from "./components/Modals/Modal"
// import ProgressBarEample from "./components/progressBar/progressBar"
// import ProgressBarExample from "./components/progressBar/progressBar"
// import TableExample from "./components/table/table"
// import DarkVariantExample from "./components/corousels/corousels";
// function Hello(){
//   const players=[

//     {
//     teamName:"CSK",
//     playersName:["Ms Dhoni ,","Avanish,","Ajinkya Rahane,","ShaikRasheed,","Rachin,"," Shivam,","Jadeja"]
//     },
//     {
//     teamName:"KKR",
//     playersName:["Shreyas,","Nitish,","Anukul,","Iyer,","Sharma,"," Hussain,","Vaibhav"]
//     },
//   ]
//   return(
//     <>
//       {/* <center><table>
//       <tr>
// <td>Teams</td>
//  <td>players</td>
// </tr>

//     {
//       players.map((players)=>
//       {
//         return(
       

//             <tr>

//             <td> {players.teamName} </td>
//             <td> {players.playersName} </td>
//             </tr>
            
        
//         )
        
//       })
//     }
//       </table></center> */}

// <NavBar/><br></br>
// <DarkVariantExample></DarkVariantExample>
// <AccordionComponent/>
//       <HeadingComponent/>
//       <Spinner/>
//       <ProgressBarExample/>
// <Modals/>
// <TableExample/>
// <Table/>

//     </>
//   )
// }
// export default Hello;

//props:

//Additional info:button
// function Hello()
// {
//   const login ="login";
//   const logout="logout";
//   const signin="signin"
//   return (
//     <>
//     {/* <Button text={"login"} textColor={"red"}/>//here textColor is what color the user wants
//     <Button text={"signup"}/>
//     <Button text={"logout"}/> */}

//     <Button text={login}/>//can access by variable taken in the above
//     <Button text={logout} textColor={"red"}/>
//     <Button text={signin}/>
//     </>
//   )
// }
// export default Hello

//children prop:greeting
// function Hello()
// {
//   return(
//     <>
//     {/* <Greeting>Swetha</Greeting>//here swetha is the child to the Greeting(parent component) and Greeting is the child to Hello
//     <Greeting>Akhi</Greeting> */}

//     <Greeting>//JSX concept
//       <h1>swetha</h1>
//       <h2>How are you?</h2>
//     </Greeting>
//     <Greeting>
//       <h1>Akhi</h1>
//       <h2>How are you?</h2>
//     </Greeting>
//     <Greeting>
//       <h1>Geetha</h1>
//       <h2>How are you?</h2>
//     </Greeting>
//     <Greeting>
//       <h1>Jana</h1>
//       <h2>How are you?</h2>
//     </Greeting>
//     <Greeting>
//       <Button text="login" textColor="green"/>
//     </Greeting>
//     </>
//   )
// }

// export default Hello

//props

// function Hello(){
//   const teams=[

//     {
//     teamName:"CSK",
//     playersName:["Ms Dhoni ,","Avanish,","Ajinkya Rahane,","ShaikRasheed,","Rachin,"," Shivam,","Jadeja"]
//     },
//     {
//     teamName:"KKR",
//     playersName:["Shreyas,","Nitish,","Anukul,","Iyer,","Sharma,"," Hussain,","Vaibhav"]
//     },
//   ];
// return<>
// {
//   teams.map(eachTeam=>
//     {
//       return(
//         <>
// <EachTeam eachTeam={eachTeam}/>//here EachTeam is the component and eachTeamis the data
//         </>
//       )
//     }
//     )
// }
// </>
// }
// export default Hello;

// const EachTeam=(prop)=>{
//   const {eachTeam}=prop;
  
//     return(
//       <>
//       <Heading1 title={eachTeam.teamName}/>
//       <List lists={eachTeam.playersName}/>
//       </>
//     )
//   };

//state:youtubebutton

// function Hello()
// {
//   return(
//     <div>
//       <YoutubeButton/>
//     </div>
//   )
// }
// export default Hello;


// function Hello()
// {
//   return(
//     <div>
//       <Circle/>
//     </div>
//   )
// }
// export default Hello;

//fetching,async and await,axios

// function Hello()
// {
//   return(
//     <div>
//       <ProductListing/>
//     </div>
//   )
// }
// export default Hello;

// function Hello()
// {
//   return(
//     <div>
//       <Data/>
//     </div>
//   )
// }
// export default Hello;

//lifecycle:

// function Hello()
// {
//   return(
//     <div>
//   <Lifecycle/>
//     </div>
//   )
// }
// export default Hello;

// function Hello()
// {
//   return(
//     <div>
//   <Unmounting/>
//     </div>
//   )
// }
// export default Hello;

//functional component:

// function Hello()
// {
//   return(
//     <div>
//   <Profile/>
//     </div>
//   )
// }
// export default Hello;

//forms:

// function Hello()
// {
//   return(
//     <div>
//   <Uncontrolled/>
//     </div>
//   )
// }
// export default Hello;

// function Hello()
// {
//   return(
//     <div>
//   <Controlled/>
//     </div>
//   )
// }
// export default Hello;

//USEEFFECT:

// function Hello()
// {
//   return(
//     <>
//     <ProductListingFunctional/>
//     </>
//   )
// }
// export default Hello;


function Hello()
{
  return(
    <>

    <Provider store={reduxStore}>
    <NavigationStack/>
    </Provider>
    
    </>
  )
}
export default Hello;


// function Hello()
// {
//   return(
//     <>
//     <UseEffectEx2/>
//     </>
//   )
// }
// export default Hello;

