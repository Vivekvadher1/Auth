/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import { getProfile } from "../services/authService";

export const AuthContext = createContext();

const  getStoredToken = () => {
  localStorage.getItem("token") || sessionStorage.getItem("token");
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dual Storage
     const token = getStoredToken();

    if (!token) {
      setLoading(false);
      return;
    }

    // setLoading(true);

    getProfile()
      .then((res) => {
        // console.log("Profile Loaded:" , res.data)
        setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (token, user, remember) => {

    if (remember) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }
     setUser(user);

    try {
      const res = await getProfile(); // 👈 always fetch fresh profile
      setUser(res.data);
    } catch (error) {
      console.error("Profile fetch failed after login:", error);
      setUser(user);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setUser(null);
  };

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
