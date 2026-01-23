import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  ProfileWrapper,
  ProfileCard,
  AvatarWrapper,
  Avatar,
  AdminBadge,
  Name,
  Email,
  RoleText,
  LogoutButton,
  
} from "../styles/ProfileStyles";

import { MdAdminPanelSettings } from "react-icons/md";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <ProfileWrapper>
        <ProfileCard role={user.role}>
            <AvatarWrapper>
              <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>

              {/* 👑 Admin Badge */}
              {user.role === "admin" && (
                <AdminBadge>
                  {" "}
                  <MdAdminPanelSettings size={16} />{" "}
                </AdminBadge>
              )}
            </AvatarWrapper>

            <Name>{user.name}</Name>
            <Email>{user.email}</Email>

            <RoleText role={user.role}>Role: {user.role}</RoleText>

            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </ProfileCard>
    </ProfileWrapper>
  );
};

export default Profile;
