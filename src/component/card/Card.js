import React from 'react';
import Avatar from '../avatar/Avatar';
import "./Card.css";

export default function Card({user}){
    return(
        <div className = "card">
            <div className = "card-header">
                <Avatar srcURL = {user.srcURL} />
                <div>
                    <h4 className = "name">{user.firstName} {user.lastName}</h4>
                    <div className = "username">{user.userName}</div>
                </div>
            </div>
            <div className = "email">{user.email}</div>
            <div className = "card-bottom">
                <img src = {process.env.PUBLIC_URL + '/followers.png'} alt = "followers" className = "followers-image"/>
                <span>{user.followers} followers</span>
            </div>
            
        </div>
    );
}