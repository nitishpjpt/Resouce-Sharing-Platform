import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

// Connect to Socket.io server
const socket = io("http://localhost:4000", {
  transports: ["websocket"], // Force WebSocket connection
});

socket.on("connect_error", (err) => {
  console.error("Connection error:", err); // Log any connection errors
});

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const currentUser = "You"; // Set the current user (You)

  useEffect(() => {
    // Listen for messages from the server
    socket.on("receiveMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup when component unmounts
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: currentUser, // Define sender
        text: message,
      };
      socket.emit("sendMessage", newMessage); // Send the message to the server
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Add the message locally
      setMessage(""); // Clear the input
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md border rounded-lg shadow-lg bg-white">
        {/* Chat Header */}
        <div className="bg-blue-600 text-white p-4 text-center rounded-t-lg">
          <h1 className="text-xl font-bold">Chat Application</h1>
        </div>

        {/* Messages Display */}
        <div
          className="h-96 p-4 overflow-y-auto bg-gray-50 flex flex-col"
          style={{ minHeight: "400px" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg max-w-xs ${
                msg.sender === currentUser
                  ? "bg-blue-500 text-white self-end ml-auto" // Align right for current user
                  : "bg-gray-300 text-black self-start mr-auto" // Align left for others
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>

        {/* Input and Send Button */}
        <div className="p-4 bg-white border-t flex items-center space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
 

