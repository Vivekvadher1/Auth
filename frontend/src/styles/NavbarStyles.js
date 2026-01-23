import styled from "styled-components";

export const Nav = styled.nav`
  width: auto;
  height: 60px;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;

  @media (max-width: 768px) {
    height: 52px;
    padding: 0 1rem;
  }
`;

export const Logo = styled.h2`
  color: #fff;
  font-size: 1.75rem;
  white-space: nowrap;
  padding-left: 2px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }

  a.active {
    color: #ffb703;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    background: #222;
    width: 100%;
    flex-direction: column;
    padding: 1rem 0;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

export const LogoutBtn = styled.button`
  background: darkgray;
  border: none;
  color: black;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  cursor: pointer;
  border-radius:4px;
`;

export const MenuIcon = styled.div`
  display: none;
  font-size: 1.6rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const CartIcon = styled.div`
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;


