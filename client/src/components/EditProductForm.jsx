import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";





function EditProductForm() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
  const navigate = useNavigate();


  async function getProducts() {
    let result = await axios.get(`http://localhost:4001/products/${params.productId}`)
    setName(result.data.data.name)
    setImage(result.data.data.image)
    setPrice(result.data.data.price)
    setDescription(result.data.data.description)
  }
  useEffect(() =>{
    getProducts();
  },[])

  function handleSubmit(event){
    event.preventDefault();
    axios.put(`http://localhost:4001/products/${params.productId}`,{
      name: name,
      image: image,
      price: price,
      description: description,

    });
    navigate('/');

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
            value = {name}
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
            value = {image}
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
            value = {price}
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
            value = {description}
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


// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// function EditProductForm() {
//   const { productId } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);

//   // ฟอร์มควบคุมด้วย state ของตัวเอง
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");

//   async function getProduct() {
//     try {
//       const result = await axios.get(`http://localhost:4001/products/${productId}`);
//       const p = result.data.data;

//       // เติมค่าเริ่มต้นให้ฟอร์ม
//       setName(p.name ?? "");
//       setImage(p.image ?? "");
//       setPrice(p.price ?? "");
//       setDescription(p.description ?? "");
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getProduct();
//   }, [productId]);

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       await axios.put(`http://localhost:4001/products/${productId}`, {
//         name,
//         image,
//         price,
//         description,
//       });

//       navigate("/"); // หรือ navigate(`/products/${productId}`)
//     } catch (err) {
//       console.log(err);
//       alert("Update failed");
//     }
//   }

//   if (loading) return <p>Loading...</p>;

//   return (
//     <form className="product-form" onSubmit={handleSubmit}>
//       <h1>Edit Product Form</h1>

//       <div className="input-container">
//         <label>
//           Name
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={name}
//             placeholder="Enter name here"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//       </div>

//       <div className="input-container">
//         <label>
//           Image Url
//           <input
//             id="image"
//             name="image"
//             type="text"
//             value={image}
//             placeholder="Enter image url here"
//             onChange={(e) => setImage(e.target.value)}
//           />
//         </label>
//       </div>

//       <div className="input-container">
//         <label>
//           Price
//           <input
//             id="price"
//             name="price"
//             type="number"
//             value={price}
//             placeholder="Enter price here"
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </label>
//       </div>

//       <div className="input-container">
//         <label>
//           Description
//           <textarea
//             id="description"
//             name="description"
//             value={description}
//             placeholder="Enter description here"
//             onChange={(e) => setDescription(e.target.value)}
//             rows={4}
//             cols={30}
//           />
//         </label>
//       </div>

//       <div className="form-actions">
//         <button type="submit">Update</button>
//       </div>
//     </form>
//   );
// }

// export default EditProductForm;
