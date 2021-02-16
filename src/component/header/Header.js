import React from 'react';
import "./Header.css";
export default function Header(){
    return(
        <div className = "header-container">
            <h1>Threads</h1>
            <button>
                <img src = {process.env.PUBLIC_URL + '/menuIcon.png'} alt = "menu-icon" className = "menu-icon"/>
            </button>
        </div>
    );
}