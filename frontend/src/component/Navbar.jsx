import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import {
  Nav,
  Logo,
  Links,
  LogoutBtn,
  MenuIcon,
  CartIcon,
} from "../styles/NavbarStyles";
import { AuthContext } from "../context/AuthContext";
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  // Global Auth State
  const { user, logout } = useContext(AuthContext);

  // Mobile Menu Toggle
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo>Authify</Logo>

      {/* Hamburger icon  */}

      <MenuIcon onClick={() => setOpen(!open)}>
        <FaBars />
      </MenuIcon>

      {/* Navigation Links */}
      <Links open={open} onClick={() => setOpen(false)}>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        {/*  if Admin only */}
        {user?.role === "admin" && <NavLink to="/admin">Admin Panel</NavLink>}

        {/* If User is not Logged in  */}
        {!user ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <>
            {/* If User is Logged in */}

            <NavLink to="/profile">Profile</NavLink>

            <LogoutBtn onClick={logout}>Logout</LogoutBtn>
          </>
        )}
      </Links>
    </Nav>
  );
};

export default Navbar;
