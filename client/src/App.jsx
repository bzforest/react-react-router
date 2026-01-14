import "./App.css";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/view/:productId" element={<ViewProductPage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route path="/product/edit/:productId" element={<EditProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
