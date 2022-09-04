import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UseGlobalStateUpdate, UseGlobalState } from './store/contextStore'

export default function EditProfile() {
    //assign functions to variables to be used
    const updateGlobalState = UseGlobalStateUpdate()
    const GlobalState = UseGlobalState()
    const navigate = useNavigate()
    //extract state from location object and assign to a variable
    const { state } = useLocation()
    //create state variable for each input field with an initial value of null with a function to update the variables
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    //function to update the state variable for the image. sets picture state and creates new file reader to read the file and set the imgData state with a base64 string of the image
    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    console.log(picture)


    //using the state variable, check the state of the form and which data/form to update. Use updateGlobalState() to update data in global state and then navigate to the profile page
    const updateuserdata = (e) => {
        e.preventDefault()
        if (state === "profileImage") {
            updateGlobalState(prev => ({
                ...prev,
                profileImage: imgData
            }))
        }

        if (state === 'name') {
            updateGlobalState(prev => ({
                ...prev,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value
            }))
        }
        if (state === 'email') {
            updateGlobalState(prev => ({
                ...prev,
                email: document.getElementById('email').value,
            }))
        }
        if (state === 'phone') {
            updateGlobalState(prev => ({
                ...prev,
                phone: document.getElementById('phone').value,
            }))
        }
        if (state === 'description') {
            updateGlobalState(prev => ({
                ...prev,
                description: document.getElementById('description').value,
            }))
        }

        navigate('/')
    }

    return (
        <div>

            <form onSubmit={updateuserdata}>

                {state === "profileImage" &&
                    <div className='editInputBox'>

                        <div className="previewProfilePic">
                            <img className="playerProfilePic_home_tile" alt='changeimage' src={imgData ? imgData : GlobalState.profileImage} />
                        </div>

                        <div className="register_profile_image">
                            <input id="profilePic" type="file" required onChange={onChangePicture} />
                        </div>
                    </div>
                }


                {
                    state === 'name' &&
                    <div className='editInputBox'>
                        <p>What's your name?</p>
                        <div className='userEditinput'>
                            <input type={'text'} placeholder={'First Name'} required id="firstName" />
                            <input type={'text'} placeholder={'Last Name'} required id="lastName" />
                        </div>
                    </div>
                }

                {
                    state === 'email' &&
                    <div className='editInputBox'>
                        <p>What's your email?</p>
                        <div className='userEditinput'>
                            <input type={'email'} placeholder={'Type Email'} required id="email" />
                        </div>
                    </div>
                }

                {
                    state === 'phone' &&
                    <div className='editInputBox'>
                        <p>What's your phone number?</p>
                        <div className='userEditinput'>
                            <input type={'number'} required placeholder={'Type Phone'} id="phone" />
                        </div>
                    </div>

                }

                {
                    state === 'description' &&
                    <div className='editInputBox'>
                        <p>
                            What type of passenger
                        </p>
                        <p>
                            are you?</p>
                        <div className='userEditinput'>
                            <input type={'text'} required placeholder={'Tell us about yourself'} id="description" />
                        </div>
                    </div>

                }



                <button className='editProfileUpdate' type='submit'>
                    Update
                </button>
            </form>
        </div >
    )
}