//fetch...
import { Component } from "react";
import ImageComponent from "../image/image";
import ListComponent from "../list/list";

class Lifecycle extends Component {
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
  componentDidMount(){
this.fetchProducts();//"componentDidMount" will run only once in the lifecycle
  }
  render() {
    return (
      <>
        <h2>Product Listing</h2>
        {/* <button onClick={this.fetchProducts}>
          Click to retrive the products
        </button> */}

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

export default Lifecycle;