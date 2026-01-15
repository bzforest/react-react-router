import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route,Routes } from "react-router-dom";

import EditProductPage from "./pages/EditProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="/create" element = {<CreateProductPage />}/>
        <Route path="/edit/:productId" element = {<EditProductPage />}/>
        <Route path="/view/:productId" element = {<ViewProductPage />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
