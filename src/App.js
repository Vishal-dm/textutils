import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
const[alert, setAlert] = useState(null);

const showAlert =(message, type) =>{
  setAlert({
    msg: message,
    type:type
    
  })
}
const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "s uccess")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success")

  }
}
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <TextForm/> */}
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  ); 
}

export default App;