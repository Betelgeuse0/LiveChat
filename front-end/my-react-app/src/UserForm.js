import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            name,
            email
        };

        try {
            const response = await axios.post('http://localhost:8080/api/users/add', user);
            console.log(response.data);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    );
};

export default UserForm;
