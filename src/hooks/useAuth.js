import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    const isAuth = JSON.parse(localStorage.getItem("isAuthenticated"));
    console.log("Value from localStorage:", isAuth);
    if (isAuth) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  console.log("isAuthenticated state:", isAuthenticated);
  return isAuthenticated;
};
