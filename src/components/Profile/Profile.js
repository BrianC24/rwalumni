import React, { Component } from 'react';
import { Animated } from "react-animated-css";


class Profile extends Component {
    state = {  }
    render() { 
        let user = this.props.user
        return ( 
            <div className="profile-container">
                <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
                        <h1>Welcome {user.username}</h1>
                        <img src={user.profilePic} alt=""/>
                </Animated>  
            </div>
              
        );
    }
}
 
export default Profile;
