import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mobileNavState: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            if(window.outerHeight >= 1024) {
                this.setState({mobileNavState: false})
            }
        });
    }

    mobileNavBtn() {
        const vWidth = window.outerWidth;
        if(vWidth <= 1024){
            this.setState({
                mobileNavState: !this.state.mobileNavState
            });
        }
    } 

    render() {
        return(
            <React.Fragment>
            <aside className="sidebar">
                <div className="logo-wrapper">
                        <NavLink to='/'>
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <nav className="signbar_nav">
                        <div className="headline">
                            Main Navigation
                        </div>
                        <ul>
                            <li><NavLink to="/users">Users</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Join Now</NavLink></li>
                            <li><NavLink to="/account-recovery">Account Recovery</NavLink></li>
                        </ul>
                    </nav>
            </aside>
            </React.Fragment>
        )
    }
}

export default Navbar;