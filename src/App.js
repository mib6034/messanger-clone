import "./App.css";
import react, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{}]);
  const [username, setUsername] = useState("");
  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };
  useEffect(() => {
    setUsername(prompt("Please Enter Your Name?"));
    return () => {};
  }, []);

  return (
    <div className="App">
      <h2>WellCome... {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter Message.....</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
