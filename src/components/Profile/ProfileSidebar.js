import React from 'react';

const ProfileSidebar = (props) => {
    return ( 
        <div className="profile-sidebar-container">
            <div className="p-image-container">
                <img src={props.user.profilePic} alt=""/>
            </div>

            <div className="sidebar-content">
                <h2>{props.user.fName} {props.user.lName}</h2>
                <p><strong>Email:</strong> {props.user.email}</p>
                <p><strong>Phone:</strong> {props.user.phone}</p>
                <p><strong>Cohort:</strong> {props.user.cohort}</p>
                {props.user.employed ? 
                    <p><strong>Position:</strong> {props.user.currentPosition}</p> 
                    : 
                    <p><strong>Position: </strong> Actively looking for new opportunities.</p>
                }
            </div>
        </div>
     );
}
 
export default ProfileSidebar;