
const Greeting=(prop)=>{
    console.log(prop);
const {children}=prop;//destructuring
    return(
        <>
        {/* <h1> Hello Good Morning {prop.children}</h1> */}
        {/* <h1> Hello Good Morning {children}</h1>//after destructuring */}
        <h1> welcome to setState
            {children}</h1>//jsx children accessing
        </>
    )
}
export default Greeting