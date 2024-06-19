
import ImageComponent from "../components/image/image"
import NavBar from "../components/navbar/navbar"
import ProductListingFunctional from "../components/products useEffect/productListing functional"

function HomeScreen()
{
    return(
        <div>
           <center><h2>Welcome to HomeScreen</h2></center>
        <NavBar/>
        <ImageComponent/>
<ProductListingFunctional/>
        
        </div>
    )
}
export default HomeScreen