import { useNavigate , useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState("");

  const getProductID = async () => {
    let result = await axios.get(`http://localhost:4001/products/${params.id}`);
    console.log(result);
    setProduct(result.data.data);
  };

  useEffect(() => {
    getProductID();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <img src={product.image} alt="some product" width="250" height="250" />
        <p>{product.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
