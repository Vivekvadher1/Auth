import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  ProfileWrapper,
  ProfileCard,
  Avatar,
  Name,
  Email,
  LogoutButton,
  RoleBadge,
} from "../styles/ProfileStyles";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <p> Loading.....</p>;

  return (
    <ProfileWrapper>
      <ProfileCard>
        <Avatar>{user?.name?.charAt(0)?.toUpperCase()}</Avatar>

        <Name> Name : {user.name}</Name>
        <Email> Email : {user.email}</Email>

        {/* <p>Role : {user.role} </p>

        {user?.role === "admin" && (
          <p style={{ color: "red" }}>You are an Admin</p>
        )} */}

        <RoleBadge $admin={user.role === "admin"}>
          {user.role === "admin" ? "Admin" : "User"}
        </RoleBadge>

        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </ProfileCard>
    </ProfileWrapper>
  );
};

export default Profile;
