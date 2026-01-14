import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProductForm() {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/products/${productId}`
        );
        const product = response.data.data;

        // ใส่ข้อมูลสินค้าลงในฟอร์ม
        setFormData({
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description,
        });
      } catch (error) {
        console.error("Error fetching product:", error);
        alert("ไม่สามารถดึงข้อมูลสินค้าได้");
      }
    };

    getProductById();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4001/products/${productId}`, {
        name: formData.name,
        image: formData.image,
        price: Number(formData.price),
        description: formData.description,
      });

      console.log("Product updated successfully");

      // Redirect กลับไปหน้า Home เมื่อสำเร็จ
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("เกิดข้อผิดพลาดในการแก้ไขสินค้า");
    }
  };

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
            value={formData.name}
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
            value={formData.image}
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
            value={formData.price}
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
            value={formData.description}
            onChange={handleChange}
            rows={4}
            cols={30}
            required
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
