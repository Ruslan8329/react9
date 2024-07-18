import React from "react";
import { useNotification } from "../contexts/NotificationContext";
import NotificationItem from "./NotificationItem";

const NotificationList: React.FC = () => {
  const { notifications } = useNotification();

  return (
    <div>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
