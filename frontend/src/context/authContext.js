import React, { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        inputs,
        {
          withCredentials: true,
        }
      );
      setCurrentUser(res.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/logout",
        inputs,
        {
          withCredentials: true,
        }
      );
      setCurrentUser(null);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
