import React from "react";
import { Notification } from "../contexts/NotificationContext";
import { useNotification } from "../contexts/NotificationContext";

interface NotificationItemProps {
  notification: Notification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
}) => {
  const { removeNotification } = useNotification();

  return (
    <div style={{ border: "1px solid", marginBottom: "10px", padding: "10px" }}>
      <p>{notification.message}</p>
      <button onClick={() => removeNotification(notification.id)}>Close</button>
    </div>
  );
};

export default NotificationItem;
