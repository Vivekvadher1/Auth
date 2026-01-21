/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import { getProfile } from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    setLoading(true);

    getProfile()
      .then((res) => {
        // console.log("Profile Loaded:" , res.data)
        setUser(res.data);
      })
      .catch((err) => {
        console.log("Profile Error:", err);
        // localStorage.removeItem("token")
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (token, user,) => {
    console.log("Logging in: ", token, user);
    localStorage.setItem("token", token);
    // if (remember) {
    //   localStorage.setItem("token", token);
    // } else {
    //   sessionStorage.setItem("token", token);
    // }
    // setUser(user);

    try {
      const res = await getProfile(); // 👈 always fetch fresh profile
      setUser(res.data);
    } catch (error) {
      console.error("Profile fetch failed after login:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
