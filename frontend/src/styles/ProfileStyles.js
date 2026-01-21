import styled from "styled-components";

export const ProfileWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileCard = styled.div`
  background: #fff;
  width: 350px;
  padding: 30px 25px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: #4f46e5;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  margin: 0 auto 15px;
`;

export const Name = styled.h3`
  margin: 10px 0 5px;
  color: #222;
`;

export const Email = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 25px;
`;

export const RoleBadge = styled.span`
  display: inline-block;
  background: ${(props) => (props.$admin ? "red" : "gray")};
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  margin-bottom: 20px;
`;


export const LogoutButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background: linear-gradient(135deg, #a8b0f4 , #4b4bd6);
  color: whitesmoke;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    color: black;
  }
`;
