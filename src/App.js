import "./App.css";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import SignIn from "./component/SignIn";

function App() {
  return (
    <div className="App">
      <RegisterPage />
      <Navbar />
      <HomePage />
      <SignIn />
    </div>
  );
}

export default App;
