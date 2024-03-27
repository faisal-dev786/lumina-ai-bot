import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Signup from "./assets/components/auth/Signup";
import Navbar from "./assets/components/Navbar";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
