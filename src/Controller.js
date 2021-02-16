import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import LandingPage from './screens/landingPage/LandingPage';
import UserListingPage from './screens/userListingPage/UserListingPage';

const Controller = () =>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path = "/users" render = {(props) => <UserListingPage {...props} />} />
                    <Route path = "/" render = {(props) => <LandingPage {...props} />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Controller;