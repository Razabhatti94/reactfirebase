import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Components/Product";



function Products(){
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");

  useEffect(() => {
    console.log("Use effect Call Hogya");
    const url = "https://dummyjson.com/products"
      // chosenCategory === "All"
      //   ? 
      //   : `https://dummyjson.com/products/category/products`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
        console.log(products)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [chosenCategory]);


   
   
return (
    <>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
    {products.map(data => (
  <Product key={data.id} src={data.thumbnail} price={data.price} category={data.category} rating={data.rating} />
))}
      
   
   
    </div>
  </div>
</section>

    
    
    </>
)
}
export default Products;