import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <RegisterPage />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
