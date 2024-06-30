import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ModelDescription from "./pages/ModelDescription";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/model-description/:model"
          element={<ModelDescription />}
        />
      </Routes>
    </div>
  );
}

export default App;
