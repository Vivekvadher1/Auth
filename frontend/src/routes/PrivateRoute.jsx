import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <p
        style={{
          textAlign: "center",
        }}
      >
        Loading......
      </p>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
