import React from 'react'
import pen from './icons/pen.png'
import rightArrow from './icons/rightchevron.png'
import { Link } from 'react-router-dom'


import { UseGlobalState } from './store/contextStore'

export default function Profile() {


    //import globalstate function to be used, access variables, and actions
    const GlobalState = UseGlobalState()





    return (
        <div>

            <div className='profileImageContainer'>
                <div>
                    <img className='profileImage' src={GlobalState.profileImage} alt="userImage" />
                </div>
                <span className='editimage'>
                    <Link
                        to="/editProfile"
                        state={"profileImage"}
                    >
                        <img src={pen} alt="Submit" width="30" height="30" />
                    </Link>
                </span>
            </div>
            <div className='infoBox'>
                <p>Name</p>
                <div className='userInfo'>
                    <p>{`${GlobalState.firstName} ${GlobalState.lastName}`}</p>
                    <Link
                        to="/editProfile"
                        state={"name"}
                    >
                        <img src={rightArrow} alt="Submit" width="18" height="18" />
                    </Link>
                </div>
            </div>
            <div className='infoBox'>
                <p>Phone</p>
                <div className='userInfo'>
                    <p>{GlobalState.phone}</p>
                    <Link
                        to="/editProfile"
                        state={"phone"}
                    >
                        <img src={rightArrow} alt="Submit" width="18" height="18" />
                    </Link>
                </div>
            </div>
            <div className='infoBox'>
                <p>Email</p>
                <div className='userInfo'>
                    <p>{GlobalState.email}</p>
                    <Link
                        to="/editProfile"
                        state={"email"}
                    >
                        <img src={rightArrow} alt="Submit" width="18" height="18" />
                    </Link>
                </div>
            </div>
            <div className='infoBox'>
                <p>Tell Us about yourself</p>
                <div className='userInfo'>
                    <p>{GlobalState.description}</p>
                    <Link
                        to="/editProfile"
                        state={"description"}
                    >
                        <img src={rightArrow} alt="Submit" width="18" height="18" />
                    </Link>
                </div>
            </div>
        </div>
    )
}