import "./App.css";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/viewproductpage/:id" element={<ViewProductPage />}/>
        <Route path="/creatpage" element={<CreateProductPage />}/>
        <Route path="/editpage/:id" element={<EditProductPage />}/>
        {/* <Route path="*" element={<NotFoundPage />}/> */}
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
