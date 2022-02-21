import Home from "./screens/Home";
import { Routes, Route } from "react-router-dom";
import BrandView from "./screens/dynamic/brands/BrandView";
import Login from "./screens/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/brands/:id" element={<BrandView />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
