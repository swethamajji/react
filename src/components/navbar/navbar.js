




// const NavBar=()=>{
//     return(
//         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//   <div className="container-fluid">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <a className="nav-link active" href="#">
//           Active
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Link
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled" href="#">
//           Disabled
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>



//     )
// }
// export default NavBar






import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserInfo } from "../../navigation/navigation-stack";

const NavBar=()=>{


// const globalInfo=useContext(UserInfo);
// console.log("globalInfo",globalInfo);
const {name,count}=useContext(UserInfo);

    const lightMode=false;//conditional rendering
    // const lightMode=true;
    const linkStyle={
      textDecoration:"none",
      color:"black",
      padding:20,
    }

    return(
        <nav className={`navbar navbar-expand-sm bg-${lightMode ? "light" : "primary"} navbar-${lightMode ? "light" : "dark"}`}>
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
       <Link style={linkStyle} to={"/"} >Home</Link>
      </li>
      <li className="nav-item">
       <Link style={linkStyle} to={"/about"}>About</Link>
      </li>
      <li className="nav-item">
        <Link style={linkStyle} to={"/contact"}>Contact</Link>
      </li>
      <li className="nav-item">
        <Link style={linkStyle} to={"/settings"}>settings</Link>
      </li>
      <li className="nav-item">
      {name}

      {count}
      </li>
    </ul>
  </div>
</nav>

    )
}
export default NavBar