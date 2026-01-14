import { useNavigate } from "react-router-dom";

function ViewProductPage() {
  const navivate = useNavigate();
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title</h2>
        <p>Content</p>
      </div>
      <button onClick={() => navivate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
