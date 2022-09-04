import React from 'react'
import fallBackImage from './icons/download.png'
import pen from './icons/pen.png'
import rightArrow from './icons/rightchevron.png'

export default function Profile() {
    return (
        <div>

            <div className='profileImageContainer'>
                <div>
                    <img className='profileImage' src={fallBackImage} alt="userImage" />
                </div>
                <span className='editimage'>
                    <img src={pen} alt="Submit" width="48" height="48" onClick={() => alert('hello')} />
                </span>
            </div>

            <div className='infoBox'>
                <p>Name</p>
                <div className='userInfo'>
                    <p></p>
                    <img src={rightArrow} alt="Submit" width="18" height="18" />
                </div>
            </div>
            <div className='infoBox'>
                <p>Phone</p>
                <div className='userInfo'>
                    <p></p>
                    <img src={rightArrow} alt="Submit" width="18" height="18" />
                </div>
            </div>
            <div className='infoBox'>
                <p>Email</p>
                <div className='userInfo'>
                    <p></p>
                    <img src={rightArrow} alt="Submit" width="18" height="18" />
                </div>
            </div>
            <div className='infoBox'>
                <p>Tell us about yourself</p>
                <div className='userInfo'>
                    <p></p>
                    <img src={rightArrow} alt="Submit" width="18" height="18" />
                </div>
            </div>
        </div>
    )
}