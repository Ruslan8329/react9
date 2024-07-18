import { useState } from "react";
import "./App.css";
import React from "react";
import { UserProfileProvider } from "./contexts/UserProfileContext";
import UserProfileDisplay from "./components/UserProfileDisplay";
import EditUserProfileForm from "./components/EditUserProfileForm";
import AddNotificationForm from "./components/AddNotificationForm";
import NotificationItem from "./components/NotificationItem";
import NotificationList from "./components/NotificationList";
import { NotificationProvider } from "./contexts/NotificationContext";

const App: React.FC = () => {
  return (
    <UserProfileProvider>
      <div className="App">
        <h1>User Profile Management</h1>
        <UserProfileDisplay />
        <EditUserProfileForm />
      </div>
    </UserProfileProvider>
  );
};

export default App;
