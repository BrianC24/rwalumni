import React, { Component } from 'react';
import './register.css';
import { Animated } from "react-animated-css";
import uuid from 'uuid/v1';
import profileGray from '../../assets/profile-gray.png';



class Register extends Component {
    state = {
        invalidPass: false,
        passCheck: '',
        user: {
            id: uuid(),
            username: '',
            fName: '',
            lName: '',
            password: '',
            email: '',
            phone: '',
            applications: [],
            profilePic: profileGray,
            posts: [],
            currentPosition: '',
            employed: false,
            cohort: '',
            slackUsername: '',
            position: 'NA'
        },
        passError: false
    }

    handleUserChange = (e, key) => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }

    register = (e) => {
        e.preventDefault();
        let { user, passCheck } = this.state;

        if (user.password !== passCheck || user.password.length < 4) {
            this.setState({ passError: true });
        } else {
            this.props.register(user)
        }
    }

    render() {
        let { user } = this.state;
        return (
            <div className="register-container">
                <div className="container">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                        <form onSubmit={(e) => this.register(e)} className="register-form">
                            <h1>Credentials</h1>
                            <p>By entering email information and or your phone number you are giving permission to be contacted by other Alumni.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" value={user.username} onChange={(e) => this.handleUserChange(e, 'username')} />
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" value={user.email} onChange={(e) => this.handleUserChange(e, 'email')} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" value={user.password} onChange={(e) => this.handleUserChange(e, 'password')} />
                                    </div>

                                    <div className="form-group">
                                        <label>Re-type Password</label>
                                        <input type="password" className="form-control" value={this.state.passCheck} onChange={(e) => this.setState({ passCheck: e.target.value })} />
                                    </div>

                                    {this.state.passError &&
                                        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                                            <p className="pass-error">Passwords do not match or length is less than 4 characters</p>
                                        </Animated>
                                    }
                                </div>
                            </div>

                            <h1>Profile Creation</h1>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" value={user.fName} onChange={(e) => this.handleUserChange(e, 'fName')} />
                                    </div>

                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" value={user.lName} onChange={(e) => this.handleUserChange(e, 'lName')} />
                                    </div>

                                    <div className="form-group">
                                        <label>Current Position</label>
                                        <input type="text" className="form-control" value={user.currentPosition} onChange={(e) => this.handleUserChange(e, 'currentPosition')} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cohort</label>
                                        <input type="text" className="form-control" value={user.cohort} onChange={(e) => this.handleUserChange(e, 'cohort')} />
                                    </div>

                                    <div className="form-group">
                                        <label>Slack Username</label>
                                        <input type="text" className="form-control" value={user.slackUsername} onChange={(e) => this.handleUserChange(e, 'slackUsername')} />
                                    </div>

                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" value={user.phone} onChange={(e) => this.handleUserChange(e, 'phone')} />
                                    </div>

                                    <button type='submit' className="btn register-btn">Register</button>
                                </div>

                            </div>


                        </form>
                    </Animated>
                </div>
            </div>

        );
    }
}

export default Register;