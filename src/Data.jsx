import React from 'react';
import { useLocation } from 'react-router-dom';

function Data() {
    const location = useLocation();
    return (
        <div>
            Hello <span style={{ color: "red" }}>{location.state.name}</span><br />
            Your email : <span style={{ color: "red" }}>{location.state.email}</span>
        </div>
    )
}

export default Data