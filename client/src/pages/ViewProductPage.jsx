import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ViewProductPage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const {id} = useParams();

  async function getProduct() {
    const results = await axios.get(`http://localhost:4001/products/${id}`);
    setProduct(results.data.data);
  }

  useEffect(() => {
    getProduct();
  }, []);


  return (
    <div>
      <h1>View Product Page {product.id}</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
