import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProductForm({product}) {
  const navigate = useNavigate();
  const [name, setName] = useState(product.name);
  const [image, setImage] = useState(product.image);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);



  async function handleSubmit(e) {
    e.preventDefault();
    await axios.put(`http://localhost:4001/products/${product.id}`, {
      name: name,
      image: image,
      price: price,
      description: description,
    });
    navigate("/");
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
