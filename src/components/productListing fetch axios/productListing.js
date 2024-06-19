//fetch...
import { Component } from "react";
import ImageComponent from "../image/image";
import ListComponent from "../list/list";

class ProductListing extends Component {
  state = {
    recipesList: [],
    isSuccess: false,
  };

  // using .then to collect promises for async js
  //   fetchProducts = () => {
  //     fetch("https://dummyjson.com/recipes")
  //       .then((res) => res.json())
  //       .then((response) => {
  //         const { recipes } = response;

  //         this.setState(
  //           {
  //             recipesList: recipes,
  //             isSucess: true,
  //           },
  //           () => {
  //             console.log(this.state.recipesList, "inside setState");
  //           }
  //         );
  //       });
  //   };

  // using async and await to collect promises for async js
  fetchProducts = async () => {
    const response1 = await fetch("https://dummyjson.com/recipes");
    const finalResponce = await response1.json();

    const { recipes } = finalResponce;

    this.setState(
      {
        recipesList: recipes,
        isSuccess: true,
      },
      () => {
        console.log(this.state.recipesList, "inside setState");
      }
    );
  };
  render() {
    return (
      <>
        <h2>Product Listing</h2>


        <button onClick={this.fetchProducts}>
          Click to retrive the products
        </button>

        {this.state.isSuccess ? (
          this.state.recipesList.map((eachRecipe) => {
            console.log(eachRecipe);
            return (
              <>
              
                <h1>{eachRecipe.name}</h1>
                <ImageComponent src={eachRecipe.image} />
                <h1 >{"Ingredients"}</h1>
                <ListComponent lists={eachRecipe.ingredients} />
                <h1>{"Instructions"} </h1>
                <ListComponent lists={eachRecipe.instructions} />
              </>
            );
          })
        ) : (
          <h3>Loading....</h3>
        )}
      </>
    );
  }
}

export default ProductListing;





// import { Component } from "react";
// import ImageComponent from "../image/image";
// import ListComponent from "../list/list";
// import Heading1, { Heading4 } from "../headings/headings";
// import axios from "axios";
// import RotatingLineSpinner from "../spinner/rotating-spinner";

// class ProductListing extends Component {
//   state = {
//     recipesList: [],
//     isSucess: false,
//   };

//   // using .then to collect promises for async js
//   //   fetchProducts = () => {
//   //     fetch("https://dummyjson.com/recipes")
//   //       .then((res) => res.json())
//   //       .then((response) => {
//   //         const { recipes } = response;

//   //         this.setState(
//   //           {
//   //             recipesList: recipes,
//   //             isSucess: true,
//   //           },
//   //           () => {
//   //             console.log(this.state.recipesList, "inside setState");
//   //           }
//   //         );
//   //       });
//   //   };

//   // using async and await to collect promises for async js
//   // fetchProducts = async () => {
//   //   const response1 = await fetch("https://dummyjson.com/recipes");
//   //   const finalResponce = await response1.json();

//   //   const { recipes } = finalResponce;

//   //   this.setState(
//   //     {
//   //       recipesList: recipes,
//   //       isSucess: true,
//   //     },
//   //     () => {
//   //       console.log(this.state.recipesList, "inside setState");
//   //     }
//   //   );
//   // };

//   fetchProducts = async () => {
//     try {
//       const { data, status } = await axios.get("https://dummyjson.com/recipes");

//       const { recipes } = data;

//       if (status === 200) {
//         this.setState(
//           {
//             recipesList: recipes,
//             isSucess: true,
//           },
//           () => {
//             console.log(this.state.recipesList, "inside setState");
//           }
//         );
//       } else {
//         alert("api not success");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   componentDidMount() {
//     this.fetchProducts();
//   }
//   render() {
//     return (
//       <>
//         <h2>Product Listing</h2>

//         {this.state.isSucess ? (
//           this.state.recipesList.map((eachRecipe) => {
//             return (
//               <>
//                 <Heading4 title={eachRecipe.name} />
//                 <ImageComponent src={eachRecipe.image} />
//                 <Heading1 title={"Ingredients"} />
//                 <ListComponent list={eachRecipe.ingredients} />
//                 <Heading1 title={"Instructions"} />
//                 <ListComponent list={eachRecipe.instructions} />
//               </>
//             );
//           })
//         ) : (
          // <RotatingLineSpinner
          //   height={"160"}
          //   width={"150"}
          //   strokeColor={"red"}
          //   visible={true}
          // />
//         )}
//       </>
//     );
//   }
// }

// export default ProductListing;