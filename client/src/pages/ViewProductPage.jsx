import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";



function ViewProductPage() {
  const [product,setProduct] = useState([]);
  const params = useParams();
  console.log(params)

  async function getProducts() {
    let result = await axios.get(`http://localhost:4001/products/${params.productId}`)
    setProduct(result.data.data)
  }
  useEffect(() =>{
    getProducts();
  },[])

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <img src = {product.image} alt = {product.name} />
        <p>{product.description}</p>
      </div>
      <Link to = "/">
        <button>Back to Home</button>
      </Link>
      
    </div>
  );
}

export default ViewProductPage;
