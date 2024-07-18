import React from "react";
import { useUserProfile } from "../contexts/UserProfileContext";

const UserProfileDisplay: React.FC = () => {
  const { userProfile } = useUserProfile();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <p>Bio: {userProfile.bio}</p>
    </div>
  );
};

export default UserProfileDisplay;
