import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {

  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ส่งข้อมูลไป API
      const response = await axios.post("http://localhost:4001/products", {
        name: formInput.name,
        image: formInput.image,
        price: Number(formInput.price),
        description: formInput.description,
      });

      console.log("Product created successfully:", response.data);

      // Redirect กลับไปหน้า Home เมื่อสำเร็จ
      navigate("/");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("เกิดข้อผิดพลาดในการสร้างสินค้า");
    }
  };

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
            value={formInput.name}
            onChange={handleChange}
            required
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
            value={formInput.image}
            onChange={handleChange}
            required
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
            value={formInput.price}
            onChange={handleChange}
            required
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
            value={formInput.description}
            onChange={handleChange}
            rows={4}
            cols={30}
            required
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
