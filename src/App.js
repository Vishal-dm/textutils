import { Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Navigation />
    </>
  );
}

export default App;
