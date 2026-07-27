import { createContext, useEffect, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedUser")),
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedIn));
  }, [loggedIn]);

  return (
    <Auth.Provider
      value={{
        userData,
        setUserData,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
