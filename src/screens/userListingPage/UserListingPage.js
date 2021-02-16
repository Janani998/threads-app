import React from 'react';
import Card from '../../component/card/Card';
import Header from '../../component/header/Header';
import "./UserListingPage.css";

const UserListingPage = (props) =>{
    const usersList = [
        {
            firstName : "Virat", 
            lastName :  "Kholi", 
            userName :"virat kholi", 
            email : "Carpediemi@one8world", 
            followers : "72,376,111",
            srcURL : "https://www.goodmorningimageshddownload.com/wp-content/uploads/2019/01/Whatsapp-Profile-DP-Images-4-300x282.jpg"
        },
        {
            firstName : "Virat", 
            lastName :  "Kholi", 
            userName :"virat kholi", 
            email : "Carpediemi@one8world", 
            followers : "72,376,111",
            srcURL : "https://www.goodmorningimageshddownload.com/wp-content/uploads/2019/01/Whatsapp-Profile-DP-Images-4-300x282.jpg"
        },
        {
            firstName : "Virat", 
            lastName :  "Kholi", 
            userName :"virat kholi", 
            email : "Carpediemi@one8world", 
            followers : "72,376,111",
            srcURL : "https://www.goodmorningimageshddownload.com/wp-content/uploads/2019/01/Whatsapp-Profile-DP-Images-4-300x282.jpg"
        },
        {
            firstName : "Virat", 
            lastName :  "Kholi", 
            userName :"virat kholi", 
            email : "Carpediemi@one8world", 
            followers : "72,376,111",
            srcURL : "https://www.goodmorningimageshddownload.com/wp-content/uploads/2019/01/Whatsapp-Profile-DP-Images-4-300x282.jpg"
        },
        {
            firstName : "Virat", 
            lastName :  "Kholi", 
            userName :"virat kholi", 
            email : "Carpediemi@one8world", 
            followers : "72,376,111",
            srcURL : "https://www.goodmorningimageshddownload.com/wp-content/uploads/2019/01/Whatsapp-Profile-DP-Images-4-300x282.jpg"
        },
        {
            firstName : "Virat", 
            lastName :  "Kholi", 
            userName :"virat kholi", 
            email : "Carpediemi@one8world", 
            followers : "72,376,111",
            srcURL : "https://www.goodmorningimageshddownload.com/wp-content/uploads/2019/01/Whatsapp-Profile-DP-Images-4-300x282.jpg"
        }
    ]
    return(
        <div id = "users" className = "main-container">
            <Header/>
            <div className = "container">
                <div className = "card-container">
                    {usersList.map(user => <Card user ={user}/>)}
                </div>
            </div>
        </div>
    );
}

export default UserListingPage;