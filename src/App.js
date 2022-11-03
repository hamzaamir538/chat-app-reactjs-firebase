import "./App.css";
import "./App.scss";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { LoginState } from "./context/LoginContext";

function App() {
  document.title = `HERON Chat | ${window.location.hostname}`;

  return (
    <LoginState>
      {/* <BrowserRouter> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      {/* </BrowserRouter> */}
    </LoginState>
  );
}

export default App;
