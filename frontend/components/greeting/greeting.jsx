import React from 'react'
import { Link } from 'react-router-dom'

const Greeting = (props) => {
    const logged_in = () => (
        <div>
            <h2>Welcome, {props.currentUser.username}</h2>
            <Link to="/">Logout</Link>
        </div>   
    );

    const logged_out = () => (
        <>
            <Link to="'/signup">Sign Up!</Link>
            <Link to="'/login">Login!</Link>
        </> 
    );

    return (props.currentUser) ? logged_in() : logged_out();
}

export default Greeting;
