import "./App.css";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import SignIn from "./component/SignIn";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <SignIn />
    </div>
  );
}

export default App;
