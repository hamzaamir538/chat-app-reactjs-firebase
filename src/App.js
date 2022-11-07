import "./App.css";
import "./App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginContext } from "./context/LoginContext";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/Layout";

function App() {
  document.title = `HERON Chat | ${window.location.hostname}`;

  const [profile, setProfile] = useState();
  const [loggedInUser, setLoggedInUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log(user);
        setLoggedInUser(user);
        setIsAuthenticated(true);

        // Create a query against the collection.
        const q = query(
          collection(db, "users"),
          where("email", "==", user.email)
        );
        getDocs(q)
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              setProfile({ id: doc.id, data: doc.data() });
            });
          })
          .catch((err) => {
            console.log("Please Reload the Page...!");
            console.log(err);
          });
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
        profile,
        setProfile,
      }}
    >
      <BrowserRouter>
        {isAuthenticated ? (
          <Routes>
            <Route path="/">
              <Route path="*" element={<Layout />} />
              <Route index element={<Layout />} />
            </Route>
          </Routes>
        ) : (
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
            {/* <Route path="/" element={<Login />} /> */}
          </Routes>
        )}
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
