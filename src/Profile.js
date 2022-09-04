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
            <div style={{ margin: '30px 0px', color: '#486de7' }}>
                <h2>Edit Profile</h2>
            </div>
            <div className='profileImageContainer'>
                <div>
                    <Link to="/editProfile" state={"profileImage"}>
                        <img className='profileImage' src={GlobalState.profileImage} alt="userImage" />
                    </Link>
                </div>
                <span className='editimage'>
                    <Link
                        style={
                            {
                                textAlign: 'center',
                                backgroundColor: "white",
                                width: "50px",
                                height: '50px',
                                borderRadius: '100%',
                                paddingLeft: '7px',
                                paddingTop: '18px',
                                paddingRight: '7px',
                                paddingBottom: '7px',
                            }}
                        to="/editProfile"
                        state={"profileImage"}
                    >
                        <img src={pen} alt="Submit" width="30" height="30" />
                    </Link>
                </span>
            </div>
            <div className='infoBox'>
                <p>Name</p>
                <Link
                    to="/editProfile"
                    state={"name"}
                    style={{ textDecoration: 'none' }}
                >
                    <div className='userInfo'>
                        <p>{`${GlobalState.firstName} ${GlobalState.lastName}`}</p>
                        <img src={rightArrow} alt="Submit" width="18" height="18" />
                    </div>
                </Link>
            </div>
            <div className='infoBox'>
                <p>Phone</p>
                <Link
                    to="/editProfile"
                    state={"phone"}
                    style={{ textDecoration: 'none' }}
                >
                    <div className='userInfo'>
                        <p>{GlobalState.phone}</p>
                        <img src={rightArrow} alt="Submit" width="18" height="18" />
                    </div>
                </Link>
            </div>
            <div className='infoBox'>
                <p>Email</p>
                <Link
                    to="/editProfile"
                    state={"email"}
                    style={{ textDecoration: 'none' }}
                >
                    <div className='userInfo'>
                        <p>{GlobalState.email}</p>
                        <img src={rightArrow} alt="Submit" width="18" height="18" />
                    </div>
                </Link>
            </div>
            <div className='infoBox'>
                <p>Tell Us about yourself</p>
                <Link
                    to="/editProfile"
                    state={"description"}
                    style={{ textDecoration: 'none' }}
                >
                    <div className='userInfo'>
                        <p>{GlobalState.description}</p>
                        <img src={rightArrow} alt="Submit" width="18" height="18" />
                    </div>
                </Link>
            </div>
        </div >
    )
}