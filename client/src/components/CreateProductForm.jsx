import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    await axios.post("http://localhost:4001/products", {
      name,
      image,
      price,
      description,
    });
    navigate("/");
  };

  function validate () {
    if (!name) {
      setIsError(true); 
      return false
    }
    if (!image){
      setIsError(true);
      return false
    }
    if (!price){
      setIsError(true);
      return false
    }
    if (!description){
      setIsError(true);
      return false
    }
    return true;
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
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
        {isError && <h2>Name is required</h2>}
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
        {isError && <h2>Image is required</h2>}
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
        {isError && <h2>Price is required</h2>}
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
        {isError && <h2>Description is required</h2>}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
