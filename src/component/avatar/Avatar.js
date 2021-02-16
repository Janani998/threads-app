import React from 'react';
import "./Avatar.css";

export default function Avatar({srcURL}){
    return(
        <div className = "avatar">
            <img src = {srcURL} alt = "avatar" className = "image"/>
        </div>
        
    );
}