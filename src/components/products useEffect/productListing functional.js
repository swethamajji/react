
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import ImageComponent from "../image/image";
// import "./styles.css";
// import RotatingLineSpinner from "../spinners/spinners";

// const ProductListingFunctional = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data, status } = await axios.get(
//         "https://fakestoreapi.com/products"
//       );
//       console.log(data, "datadata");

//       if (status === 200) {
//         setProducts(data);
//       } else {
//         alert("API request was not successful");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <h3>Product List</h3>
//       {products.length > 0 ? (
//         <div className="product-list">
//           {products.map((eachObject) => {
//             const { id, title, price, description, category, image, rating } =
//               eachObject;
//             return (
//               <div key={id} className="product-card">
//                 <h3 className="product-title">{title}</h3>
//                 <ImageComponent src={image} className="product-image" />
//                 <p className="product-category">
//                   <strong>Category:</strong> {category}
//                 </p>
//                 <p className="product-price">
//                   <strong>Price:</strong> ${price}
//                 </p>
//                 <p className="product-description">{description}</p>
//                 <p className="product-rating">
//                   <strong>Rating:</strong> {rating.rate} ({rating.count}{" "}
//                   reviews)
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <RotatingLineSpinner/>
//       )}
//     </>
//   );
// };

// export default ProductListingFunctional;



import axios from "axios";
import React, { useState, useEffect } from "react";
import ImageComponent from "../image/image";
import "./style.css";
import { Link } from "react-router-dom";
import RotatingLineSpinner from "../spinners/spinners";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("All");
  const [loading, setLoading] = useState(false);
  const [categories, setCategory] = useState([
    "All",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]);
  useEffect(() => {
  
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    const { data, status } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    if (status === 200) {
      setCategory([...categories, ...data]);
    }
  };

  const fetchProducts = async () => {
    try {
      const { data, status } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      console.log(data, "datadata");

      if (status === 200) {
        setProducts(data);
        setLoading(false);
      } else {
        alert("API request was not successful");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setLoading(true);
    const optionSelected = event.target.value;
    console.log("handleChange", optionSelected);
    setFilterValue(optionSelected);
    categoryFilterAsyncCall(optionSelected);
  };

  const categoryFilterAsyncCall = async (optionSelected) => {
    if (optionSelected === "All") {
      fetchProducts();
    } else {
      const { data, status } = await axios(
        `https://fakestoreapi.com/products/category/${optionSelected}`
      );
      if (status === 200) {
        setProducts(data);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <h3>Product List</h3>
      <select value={filterValue} onChange={handleChange}>
        {categories.map((each) => {
          return (
            <>
              <option value={each}>{each}</option>
            </>
          );
        })}
      </select>
      {products.length > 0 && !loading ? (
        <div className="product-list">
          {products.map((eachObject) => {
            const { id, title, price, description, category, image, rating } =
              eachObject;
            return (
              <div key={id} className="product-card">
                <h3 className="product-title">{title.slice(0, 20)}</h3>
                <ImageComponent src={image} className="product-image" />
                <p className="product-category">
                  <strong>Category:</strong> {category}
                </p>
                <p className="product-price">
                  <strong>Price:</strong> ${price}
                </p>
                {/* <p className="product-description">{description}</p> */}
                <p className="product-rating">
                  <strong>Rating:</strong> {rating.rate} ({rating.count}{" "}
                  reviews)
                </p>
                <button>
                  <Link to={`${category}/${id}`}>Click to see product</Link>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <RotatingLineSpinner/>
        
      )}
    </>
  );
};

export default ProductListing;

