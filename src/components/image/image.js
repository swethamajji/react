// const Image=()=>{
//     return(
//         <img src="https://images-cdn.ubuy.co.in/652175242f3a4145715275bc-100-assorted-roses-fresh-cut-flowers.jpg"width="200px"></img>
//     )
// }
// export default Image

import { Component } from "react";

 class ImageComponent extends Component{
    render()
    {
        return(
            <img src={this.props.src} width="200px"></img>
    )
    }
 }
 export default ImageComponent