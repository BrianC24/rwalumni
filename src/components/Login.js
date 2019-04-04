import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: '',
        loginAttempt: false
    }

    login = (e) => {
        e.preventDefault();

        let user = this.props.users.filter(u => u.username === this.state.username && u.password === this.state.password)[0];

        if (user === undefined) {
            this.setState({
                loginAttempt: true
            })
        } else {
            this.props.login(user);
        }

    }

    render() {
        return (
            <div className="login-container">
                <div className="overlay">
                    <form className="login-form" onSubmit={(e) => this.login(e)}>
                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                            <div className="group">
                                <h1>Enter the Network</h1>
                                <input
                                    className="group-item"
                                    type="text"
                                    placeholder="Username..."
                                    value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value })} />

                                <input
                                    className="group-item"
                                    type="password"
                                    placeholder="Password..."
                                    value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })} />

                                {this.state.loginAttempt &&

                                    <Animated animationIn="lightSpeedIn" animationOut="fadeOut" isVisible={true}>
                                        <p className="login-error">Invalid password or username</p>
                                    </Animated>
                                }
                                <button className="group-item login-button" type="submit">Login</button>
                                <Link to ='/register' className="register-link">Don't Have an account? Register Here</Link>

                            </div>
                        </Animated>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;