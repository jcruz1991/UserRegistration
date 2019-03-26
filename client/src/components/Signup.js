import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            password: '',
            repassword: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSignUpClick = (event) => {
        event.preventDefault();

        //retrieve fields from state
        const { fname, lname, email, username, password } = this.state;

        //setup sign up object to be sent to server
        const signUpObj = {
            fname,
            lname,
            email,
            username,
            password
        };
        // post request to server
        axios.post('/signup', {
            signUpObj
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        let { fname, lname, email, username, password, repassword } = this.state;
        return(
            <div className="signup-wrapper">
                <form>
                    <h1>Signup</h1>
                    <input type="text" name="fname" placeholder="First Name" autoComplete="off" defaultValue={ fname } onChange={ this.handleChange } />
                    <input type="text" name="lname" placeholder="Last Name" autoComplete="off" defaultValue={ lname } onChange={ this.handleChange } />
                    <input type="email" name="email" placeholder="Email" autoComplete="off" defaultValue={ email } onChange={ this.handleChange } />
                    <input type="text" name="username" placeholder="Username" autoComplete="off" defaultValue={ username } onChange={ this.handleChange }/>
                    <input type="password" name="password" placeholder="Password" autoComplete="off" defaultValue={ password } onChange={ this.handleChange } />
                    <input type="password" name="repassword" placeholder="Confirm Password" autoComplete="off" defaultValue={ repassword } onChange={ this.handleChange } />
                    <div>
                        <p>Already have an account? <Link to="/login">Sign in</Link></p>
                    </div>
                    <button onClick={ this.handleSignUpClick }>Register</button>
                </form>
            </div>
        )
    }
}

export default Signup;