import { useRef, useState } from "react"


const Uncontrolled=()=>{
    const emailRef= useRef();
    const passwordRef=useRef();
    const optionRef=useRef();
    const[error,setError]=useState("")
    const handleSubmit=(event)=>{
        event.preventDefault();

        const email=emailRef.current.value;
        let password=passwordRef.current.value;
        const option=optionRef.current.value;
        console.log(option);
        password=Number(password);

        const textRegex=/code/
        const passwordRegex=/[0-9]/;
    
        if(textRegex.test(email) && passwordRegex.test(password)){
            setError("");
            const userForm={
                // email:email,
                // password:password,    //instead of two time we can use one
                email,
                password,
            };
            console.log(userForm,"userForm");
//valid user input
        }else{
            // alert("invalid user input");
            setError("invalid user input")
            const userForm={
                // email:email,
                // password:password,    //instead of two time we can use one
                email,
                password,
            };
            console.log(userForm,"userFormInvalid");
        }
    };

    return(
        <>
  <title>Bootstrap Example</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <div className="container mt-3">
    <h2>Stacked form</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-3">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          ref={emailRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          ref={passwordRef}
        />
      </div>
      <select ref={optionRef}>
        <option option="Male">Male</option>
        <option option="Female">female</option>
      </select>
      {error && <span style={{color:"red"}}>Invalid Credentials</span>}
      <div className="form-check mb-3">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" name="remember" />{" "}
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</>

    )
}
export default Uncontrolled