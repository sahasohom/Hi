import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Data from './Data';

function Form() {
    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('Data', { state: { name: user.name, email: user.email } });

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                Enter your name :
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder='Enter your name'
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                /><br />
                Enter your email :
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                /><br />
                <button type='submit'>
                    Submit
                </button>
            </form>
        </>
    )
}

export default Form