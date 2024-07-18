import React, { createContext, useContext, useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  bio: string;
}

interface UserProfileContextType {
  userProfile: UserProfile;
  updateUserProfile: (profile: UserProfile) => void;
}

const UserProfileContext = createContext<UserProfileContextType | undefined>(
  undefined
);

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};

export const UserProfileProvider: React.FC = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    email: "",
    bio: "",
  });

  const updateUserProfile = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  return (
    <UserProfileContext.Provider value={{ userProfile, updateUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};
