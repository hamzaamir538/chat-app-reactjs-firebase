import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginState = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(user);
          setIsLoggedIn(user);
            navigate('/');
          // ...
        } else {
          // User is signed out
          console.log("not logged in");
          setIsLoggedIn();
            navigate('/login');
        }
      })
  }, [])

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </LoginContext.Provider>
  );
};
