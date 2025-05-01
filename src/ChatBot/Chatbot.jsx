// src/App.jsx
import React, { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav"; // Import your Nav component
import Footer from "../components/Footer";

// Backend API URL
const API_URL = "http://localhost:5000/chatbot"; // Replace with your backend URL

// Chatbot Component
export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Function to send user message to the chatbot and receive the response
  const sendMessage = async () => {
    if (!userInput.trim()) return;

    // Add the user's message to the chat
    setMessages((prev) => [...prev, { text: userInput, isUser: true }]);
    setUserInput(""); // Clear input field

    try {
      // Send the user message to your backend
      const response = await axios.post(API_URL, { message: userInput });

      // Extract the response from the backend (Dialogflow reply)
      const botReply = response.data.reply;

      // Add the bot's reply to the messages array
      setMessages((prev) => [
        ...prev,
        { text: botReply, isUser: false },
      ]);
    } catch (error) {
      console.error("Error communicating with the chatbot:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, something went wrong.", isUser: false },
      ]);
    }
  };

  return (
    <>
    <Nav/>
    <div className="App flex justify-center items-center min-h-screen bg-gray-100">
      <div className="chatbox bg-white p-6 rounded-xl shadow-lg w-full max-w-lg flex flex-col">
        {/* Chat Messages */}
        <div className="chat-messages flex-grow overflow-y-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                message.isUser
                  ? "bg-blue-100 self-end"
                  : "bg-gray-200 self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="input-section flex items-center space-x-3">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask me anything about digital literacy!"
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    {/* Footer component */}
    </>
    
  );
}
