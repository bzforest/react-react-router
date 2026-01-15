import { Link } from "react-router-dom";
import EditProductForm from "../components/EditProductForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

function EditProductPage() {
  const [product,setProduct] = useState([]);
  const params = useParams();
  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm />
      <Link to = "/">
      <button>Back to Home</button>
      </Link>
      
    </div>
  );
}

export default EditProductPage;
