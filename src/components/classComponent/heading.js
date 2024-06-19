
// import React, { Component } from "react";
// import "./heading.css"
// import List from "../list/list";
// import styles from "./heading.module.css"
// class HeadingComponent extends Component{
//     render()
//     {
//         return(
//         <React.Fragment>
//             <div>
//                 <h2 style={{
//                     color:"red",
//                     backgroundColor:"black",
//                 }}>Inline styles</h2><br></br>
//                 <h3 className="head-text">External styles</h3><br></br>//no need to import it can be used anywhere
//                 <h3 className={styles.heading}>External module styles</h3>//here we need to import where ever we are using the styles//here it should accessed using with variable name like styles in the above
//                 <List/>
//                 </div>
//             </React.Fragment>
//         ); 
//     }
// }
// export default HeadingComponent;

const Heading1 = (prop)=>{
const {title}=prop;

    return <h2>{title}</h2>
        

};
export default Heading1
