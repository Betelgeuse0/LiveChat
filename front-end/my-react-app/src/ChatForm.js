import React, { useState } from 'react';
import axios from 'axios';

const ChatForm = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8080/send-message', { message }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending chat message:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Type Chat Message:</label>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div>
                <button type="submit">Send Message</button>
            </div>
        </form>
    );
};

export default ChatForm;
