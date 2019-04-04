import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import { Redirect } from 'react-router-dom';
import './profile.css';

import ProfileSidebar from './ProfileSidebar';
import ApForm from './Applications/ApForm';
import ApDisplay from './Applications/ApDisplay';

class Profile extends Component {
    state = {
        showForm: false,
        symbol: '+'
    }

    toggle = () => {
        if(this.state.showForm === false) {
            this.setState({
                showForm: true,
                symbol: 'x'
            })
        } else {
            this.setState({
                showForm: false,
                symbol: '+'
            })
        }
        
    }

    updatePic = () => {
        let index = this.props.users.findIndex(u => u.email === this.props.user.email);
        console.log(index);
        
        // this.props.update(index, profilePic, value)
    }

    render() {
        let user = this.props.user;
        return (
            !user.username ?
                <Redirect to='/login' />
                :
                <div className="profile-container row fixed">
                    <div className="sidebar">
                        <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                            <ProfileSidebar user={user} updatePic={this.updatePic}/>
                        </Animated>
                    </div>
                    
                    <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>

                        <div className="applications-container">
                            <h1>Job Applications</h1>
                            <div className="application-form">
                                <div className="form-toggle"> 
                                    <p id="plus" onClick={this.toggle}>{this.state.symbol}</p>
                                </div>  
                                {this.state.showForm &&  <ApForm add={this.props.add} toggle={this.toggle}/>}
                            </div>

                            <div className="application-display">
                                <ApDisplay update={this.props.update} delete={this.props.delete} apps={user.applications}/>
                            </div>
                        </div>
                    </Animated>
                </div>
        );
    }
}

export default Profile;
