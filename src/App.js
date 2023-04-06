import "./App.css";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/RegisterPage" element={<RegisterPage />}></Route>
        <Route path="/product_card" element={<product_card />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
