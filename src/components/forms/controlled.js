// import { useState } from "react"

// function Controlled(){

//     const[username,setUsername]=useState("");
//     const[password,setPassword]=useState("");
// const[gender,setGender]=useState("");


// const[formErrors,setFormErrors]=useState(
//     {
//         usernameError:null,
//         passwordError:null,
//         genderError:null,
//     }
// );
// // const[userInfo,setUserInfo]=useState(
// //     {
// //         username:"",
// //         password:"",
// //         gender:"",
// //     }
// // )
// const UserNameHandler=(event)=>{
// const userEnteredUsername=event.target.value;
// console.log("userEnteredUsername",userEnteredUsername);
// setUsername(userEnteredUsername);


// //validation for username
// // const usernameRegex = /[a-z][0-9]/
// const usernameRegex = /[a-z]/
// const testCasePassed=usernameRegex.test(userEnteredUsername);
// if(testCasePassed)
//     {
// //allow the user to hit the server
// console.log("username test passed");
// setFormErrors({...formErrors,usernameError:null});
//     }else{
// //doesn't allow the user to hit the server
// console.log("username test failed");
// setFormErrors({...formErrors,usernameError:"Invalid Username"});
//     }

// };
// const PasswordHandler=(event)=>{
// const userEnteredPassword=event.target.value;
// console.log("userEnteredPassword",userEnteredPassword);
// setPassword(userEnteredPassword);
// const testCasePassed=userEnteredPassword.length<=10? true: false;
// if(testCasePassed)
//     {
// console.log("password test passed");
// setFormErrors({...formErrors,usernameError:null});
//     }else{
// console.log("password test failed");
// setFormErrors({...formErrors,passwordError:"Invalid password"});
//     }
// };
// const genderHandler=(event)=>{
// const userEnteredGender=event.target.value;
// console.log("userEnteredGender",userEnteredGender);
// setGender(userEnteredGender)
// };


//     const handleSubmit=(event)=>{
//         event.preventDefault();
// //hit the server with user entered data

// clientPostServer();

//     };

//     const clientPostServer=()=>{
//         fetch('https://dummyjson.com/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
        
//         // username: 'emilys',
//         // password: 'emilyspass',
//         username:username,
//         password:password,
//         expiresInMins: 30, // optional, defaults to 60
//       })
//     })
//     .then(res => res.json())
//     .then((response)=>{
//         console.log(response,"api response");
//     });
    
//     }
    
//     return(
//         <div>
//          <form onSubmit={handleSubmit}>
//       <div className="mb-3 mt-3">
//         <label htmlFor="username">Email:</label>
//         <input
//           type="email"
//           className="form-control"
//           id="username"
//           placeholder="Enter username"
//           name="username"
//           value={username}
//           onChange={UserNameHandler}
//         />
//         {formErrors.usernameError && <span style={{color:"red"}}>Username Invalid</span>}

//       </div>
//       <div className="mb-3">
//         <label htmlFor="pwd">Password:</label>
//         <input
//           type="password"
//           className="form-control"
//           id="pwd"
//           placeholder="Enter password"
//           name="pswd"
//     value={password}
//     onChange={PasswordHandler}
//         />
//          {formErrors.passwordError && <span style={{color:"red"}}>Password Invalid</span>}
//       </div>
//       <select value={gender} onChange={genderHandler}>
//         <option option="Male">Male</option>
//         <option option="Female">female</option>
//       </select>
//       {/* {error && <span style={{color:"red"}}>Invalid Credentials</span>} */}
      
//       {!formErrors.usernameError && !formErrors.passwordError && (
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
// )}
//     </form>
//   </div>
//     )
// }
// export default Controlled



import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

function Controlled() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [formErrors, setFormErrors] = useState({
    usernameError: null,
    passwordError: null,
    genderError: null,
  });

  const userNameHandler = (event) => {
    const userEnteredUsername = event.target.value;
    setUsername(userEnteredUsername);

    // Validation for username
    const usernameRegex = /^[a-z]/;
    const testCasePassed = usernameRegex.test(userEnteredUsername);

    if (testCasePassed) {
      setFormErrors({ ...formErrors, usernameError: null });
    } else {
      setFormErrors({
        ...formErrors,
        usernameError:
          "Username must be at least 3 characters long and contain only letters and numbers",
      });
    }
  };

  const passwordHandler = (event) => {
    const userEnteredPassword = event.target.value;
    setPassword(userEnteredPassword);

    const testCasePassed = userEnteredPassword.length <= 10;
    if (testCasePassed) {
      setFormErrors({ ...formErrors, passwordError: null });
    } else {
      setFormErrors({
        ...formErrors,
        passwordError: "Password must be 10 characters or less",
      });
    }
  };

  const genderHandler = (event) => {
    const userEnteredGender = event.target.value;
    setGender(userEnteredGender);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clientPostServer();
  };

  const clientPostServer = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) {
          setLoginSuccess(false);
        } else {
          setLoginSuccess(true);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className={`form-control ${
            formErrors.usernameError ? "is-invalid" : ""
          }`}
          id="username"
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={userNameHandler}
        />
        {formErrors.usernameError && (
          <div className="invalid-feedback">{formErrors.usernameError}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="pwd" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className={`form-control ${
            formErrors.passwordError ? "is-invalid" : ""
          }`}
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          value={password}
          onChange={passwordHandler}
        />
        {formErrors.passwordError && (
          <div className="invalid-feedback">{formErrors.passwordError}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="gender" className="form-label">
          Gender:
        </label>
        <select
          value={gender}
          onChange={genderHandler}
          className="form-control"
          id="gender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      {!formErrors.usernameError && !formErrors.passwordError && (
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      )}
      {loginSuccess && <h2 className="success-message">Welcome user</h2>}
    </form>
  );
}

export default Controlled;