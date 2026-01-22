
import styled from "styled-components";

export const ProfileWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
`;

export const ProfileCard = styled.div`
  width: 360px;
  padding: 32px;
  border-radius: 18px;
  text-align: center;
  background: ${({ role }) =>
    role === "admin"
      ? "linear-gradient(135deg, #c2cbd6, #e6ecf3)"
      : "linear-gradient(135deg, #88a0b7, #d7e3f1)"
    }; 

  color: #2c3e50;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.35s ease;

  /* ✨ Hover animation */
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  margin: auto;
`;

export const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #dbe4ee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 38px;
  font-weight: bold;
  color: #34495e;
`;

/* 👑 Admin badge */
export const AdminBadge = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #687484;     
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 600;
`;

export const Name = styled.h1`
  margin-top: 18px;
  margin-bottom: 6px;
  font-weight: 600;
`;

export const Email = styled.p`
  font-size: 1rem;
  color: #5f6c7b;
  margin-bottom: 14px;
`;

export const RoleText = styled.p`
  font-size: 0.9rem;
  color: ${({ role }) => (role === "admin" ? "#475569" : "#64748b")};
  margin-bottom: 20px;
`;

export const LogoutButton = styled.button`
  padding: 10px 22px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #334155;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #1e293b;
  }
`;

