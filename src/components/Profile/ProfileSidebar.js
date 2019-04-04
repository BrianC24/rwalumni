import React, { Component } from 'react';

class ProfileSidebar extends Component {
    state = {
        image: ''
    }

    imageUpload = (pic) => {
      
    }

    render() {
        let { user } = this.props
        return (
            <div className="profile-sidebar-container">
                <div className="p-image-container">
                    <img src={user.profilePic} alt="" />
                </div>

                <div className="sidebar-content">
                    <h2>{user.fName} {user.lName}</h2>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Cohort:</strong> {user.cohort}</p>
                </div>
            </div>);
    }
}

export default ProfileSidebar;
