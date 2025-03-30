"use client";

import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const updateLoginState = (loggedIn, role) => {
    setIsLoggedIn(loggedIn);
    setUserRole(role);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, updateLoginState }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}