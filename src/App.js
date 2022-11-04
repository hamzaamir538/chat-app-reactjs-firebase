import "./App.css";
import "./App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginContext } from "./context/LoginContext";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";

function App() {
  document.title = `HERON Chat | ${window.location.hostname}`;

  const [loggedInUser, setLoggedInUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log(user);
        setLoggedInUser(user);
        setIsAuthenticated(true);
      } else {
        // User is signed out
        setIsAuthenticated(false);
        setLoggedInUser();
      }
    });
  }, []);

  return (
    <LoginContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <BrowserRouter>
          {
            isAuthenticated ?
            <Routes>
              <Route path="*" element={<Home />} />
              {/* <Route index element={<Home />} /> */}
            </Routes>
            :
            <Routes>
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Login />} />
              {/* <Route path="/" element={<Login />} /> */}
            </Routes>
          }
          {/* <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NoPage />} />
              <Route index element={<Home />} />
          </Routes> */}
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
