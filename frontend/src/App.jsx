import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./pages/Profile";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Footer from "./component/Footer";
import Admin from "./pages/Admin";
import Error from "./pages/Error";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/403" element={<Error />} />
        {/* Protected Route */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Admin only route */}
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
