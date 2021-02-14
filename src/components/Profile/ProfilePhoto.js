import React from 'react'
import image from '../Profile/profile.jpg'


const ProfilePhoto =()=>{
    let style = {color : "red"}
    return (
        <div className = "profimg">
            <img src={image} alt="myphoto" width="300" />
        </div>
    );
}
export default ProfilePhoto;