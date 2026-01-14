import { Link } from "react-router-dom";

function ViewProductPage() {
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title</h2>
        <p>Content</p>
      </div>
      <Link to={"/"}>
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default ViewProductPage;
