import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import logo from '../../assets/logo-no-back.jpeg';


class Nav extends Component {
    state = {
    }

    
    
    render () {
        return (
            <nav className="nav">
                <div className="nav-items">
                    <div className="logo-item">
                        <Link className="item" to="/">
                            <img src={logo} alt=""/>
                        </Link> 
                    </div>

                    <div className="items">
                        <Link className="item" to="/alumni">Alumni</Link>
                        <Link className="item" to="/resources">Resources</Link>
                        <Link className="item" to="/forum">Forum</Link>
                        <Link className="item" to="/profile">Profile</Link>
                    </div>

                    <div className="right-links">
                        {!this.props.isLoggedIn && 
                            <Link className="item" to="/login">Login</Link>

                        }

                        {this.props.isLoggedIn && 
                            <Link className="item" to="/logout">Logout</Link>
                        }
                    </div>
                    
                </div>
            </nav>
        );
    }
  
}

export default Nav;