import React from 'react'
import pen from './icons/pen.png'
import rightArrow from './icons/rightchevron.png'


import { UseGlobalState } from './store/contextStore'

export default function Profile() {



    const GlobalState = UseGlobalState()

    return (
        <div>

            <div className='profileImageContainer'>
                <div>
                    <img className='profileImage' src={GlobalState.profileImage} alt="userImage" />
                </div>
                <span className='editimage'>
                    <img src={pen} alt="Submit" width="30" height="30" onClick={() => alert('hello')} />
                </span>
            </div>

            <div className='infoBox'>
                <p>Name</p>
                <div className='userInfo'>
                    <p>{GlobalState.name}</p>
                    <img src={rightArrow} alt="Submit" width="18" height="18" />
                </div>
            </div>
            <div className='infoBox'>
                <p>Phone</p>
                <div className='userInfo'>
                    <p>{GlobalState.phone}</p>
                    <img src={rightArrow} alt="Submit" width="18" height="18" />
                </div>
            </div>
            <div className='infoBox'>
                <p>Email</p>
                <div className='userInfo'>
                    <p>{GlobalState.email}</p>
                    <img src={rightArrow} alt="Submit" width="18" height="18" />
                </div>
            </div>
            <div className='infoBox'>
                <p>Tell Us about yourself</p>
                <div className='userInfo'>
                    <p>{GlobalState.description}</p>
                    <img src={rightArrow} alt="Submit" width="18" height="18" />
                </div>
            </div>
        </div>
    )
}