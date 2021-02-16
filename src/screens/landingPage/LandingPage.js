import React from 'react';
import "./LandingPage.css";

const LandingPage = (props) =>{
    const showUsersHandler = () =>{
        props.history.push("/users");
    }
    return(
        <div className = "main-container">
            <button className = "show-users-button" onClick = {showUsersHandler}>Show Users</button>
        </div>
    );
}

export default LandingPage;