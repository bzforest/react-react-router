import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 1 import useNavigate

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate(); // 2 เรียกใช้ useNavigate

  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4001/products");
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleCreateProduct = () => {
    // 3 สร้าง handlerFunction
    navigate("/product/create");
  };

  const handleViewProduct = (productId) => {
    navigate(`/product/view/${productId}`);
  };

  const handleEditProduct = (productId) => {
    navigate(`/product/edit/${productId}`);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:4001/products/${productId}`);
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("เกิดข้อผิดพลาดในการลบสินค้า");
    }
  };

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <button onClick={handleCreateProduct}>Create Product</button>
      </div>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/250/250"
                  alt="some product"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button
                    onClick={() => handleViewProduct(product.id)}
                    className="view-button"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEditProduct(product.id)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                </div>
              </div>

              <button
                className="delete-button"
                onClick={() => handleDeleteProduct(product.id)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
