import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./Message.css";

function Message({ message, username }) {
  const isUser = username === message.username;
  return (
    <div class={`message ${isUser && "message__user"}`}>
      <Card class={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
