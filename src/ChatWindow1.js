import React from 'react';
import "./App.css";

const ChatWindow = ({messages}) => 
{
    return (
        <div className='chat-window'>
            {messages.map((message, index) => (
                <div key= {index} className={message.auth === 'Jackson'?'message-spent':'message-accept'}>
                    {/* <span>{message.auth} :&nbsp;</span> */}
                    <span>{message.text}</span>
                </div>
            ))}
        </div>
    )
}

export default ChatWindow;