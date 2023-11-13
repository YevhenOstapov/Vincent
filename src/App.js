import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatWindow from './ChatWindow';
import ChatWindow1 from './ChatWindow1';
import InputBox from './InputBox';
import "./App.css";
// import {Container, Row, Col, Card} from 'react-bootstrap' ;

let socket;
const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    if(message)
    {
      socket.emit('chatMessage', message);
      setMessages([...messages, { auth:'Vincent', text: message }]);
    }
  };
  const sendMessage1 = (message) => {
    if(message)
    {
      socket.emit('chatMessage', message);
      setMessages([...messages, { auth:'Jackson', text: message }]);
    }
  };

  useEffect(() => {
    socket = io('http://127.0.0.1:5000'); 
    socket.on('chatMessage', (message) => {  
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div className="main-page-style">
      <div className="chat-app">
        <h1 className="chat-app-h1">Vincent</h1>
        <ChatWindow messages={messages} />
        <InputBox sendMessage={sendMessage} />
      </div>
      <div className="chat-app">
        <h1 className="chat-app-h1">Jackson</h1>
        <ChatWindow1 messages={messages} />
        <InputBox sendMessage={sendMessage1} />
      </div>
    </div>
  );
};

export default ChatApp;