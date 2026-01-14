import EditProductForm from "../components/EditProductForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  async function getProduct() {
    const results = await axios.get(`http://localhost:4001/products/${id}`);
    setProduct(results.data.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Edit Product Page {product.id}</h1>
      <EditProductForm product={product} />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default EditProductPage;
