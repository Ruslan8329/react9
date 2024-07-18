import React, { useState } from "react";
import { useNotification } from "../contexts/NotificationContext";

const AddNotificationForm: React.FC = () => {
  const { addNotification } = useNotification();
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error" | "info">("info");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification(message, type);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Notification message"
      />
      <select
        value={type}
        onChange={(e) =>
          setType(e.target.value as "success" | "error" | "info")
        }
      >
        <option value="success">Success</option>
        <option value="error">Error</option>
        <option value="info">Info</option>
      </select>
      <button type="submit">Add Notification</button>
    </form>
  );
};

export default AddNotificationForm;
