import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

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

  //Not Logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

// Role check 
  if (role && isAuthenticated.role !== role) {
    return <Navigate to="/403" replace />;
  }

  return children;
  // isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
