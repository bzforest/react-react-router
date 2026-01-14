import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";
import { useState , useEffect} from "react";

function EditProductForm() {

  const [name , setName] = useState("");
  const [imgSrc , setImgSrc] = useState("");
  const [price , setPrice] = useState("");
  const [description , setDescription] = useState("")
  const navigate = useNavigate();
  const params = useParams();

  const getData = async () => {
   let resault = await axios.get(`http://localhost:4001/products/${params.id}`)    // แสดงข้อมูลเก่า ก่อนที่จะ edit
   const data = resault.data.data;

   setName(data.name);
   setImgSrc(data.image);
   setPrice(data.price);
   setDescription(data.description)
  }

  useEffect (() => {
    getData();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.put(`http://localhost:4001/products/${params.id}`,     //   edit from
      {
        "name": name,
        "price": price,
        "image": imgSrc,
        "description": description
      }
    )
    navigate("/")
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
            onChange={(event) => {setName(event.target.value)}}
            value={name}
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
            onChange={(event) => {setImgSrc(event.target.value)}}
            value={imgSrc}
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
            onChange={(event) => {setPrice(event.target.value)}}
            value={price}
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
            onChange={(event) => {setDescription(event.target.value)}}
            rows={4}
            cols={30}
            value={description}
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
