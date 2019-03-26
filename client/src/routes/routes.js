import React from "react";
import { Route } from "react-router-dom";

//components
import Home from '../components/Home';
import Users from '../components/Users';
import Signup from '../components/Signup';
import Login from '../components/Login';
import AccountRecovery from '../components/AccountRecovery';

const Routes = () => {
    return(
        <React.Fragment>
            <section className="main">
                <Route path="/" exact component={ Home } />
                <Route path="/users" exact component={ Users } />
                <Route path="/signup" exact component={ Signup } />
                <Route path="/login" exact component={ Login } />
                <Route path="/account-recovery" exact component={ AccountRecovery } />
            </section>
        </React.Fragment>
    )
}

export default Routes;