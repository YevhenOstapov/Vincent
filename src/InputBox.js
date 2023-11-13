import React, { useState } from 'react';
const InputBox = ({ sendMessage }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      sendMessage(inputValue);
      setInputValue('');
    };
  
    return (
      <form className="input-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
          className='input-box-input'
        />
        <button className='input-box-button' type="submit">Send</button>
      </form>
    );
  };
  
  export default InputBox;