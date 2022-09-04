import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function EditProfile() {
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

    return (
        <div>


            {state === "profileImage" &&
                <div className='editInputBox'>

                    <div className="previewProfilePic">
                        <img className="playerProfilePic_home_tile" alt='changeimage' src={imgData} />
                    </div>

                    <div className="register_profile_image">
                        <input id="profilePic" type="file" onChange={onChangePicture} />
                    </div>
                </div>
            }


            {
                state === 'name' &&
                <div className='editInputBox'>
                    <p>What's your name?</p>
                    <div className='userEditinput'>
                        <input type={'text'} placeholder={'First Name'} />
                        <input type={'text'} placeholder={'Last Name'} />
                    </div>
                </div>
            }

            {
                state === 'email' &&
                <div className='editInputBox'>
                    <p>What's your email?</p>
                    <div className='userEditinput'>
                        <input type={'email'} placeholder={'Type Email'} />
                    </div>
                </div>
            }

            {
                state === 'phone' &&
                <div className='editInputBox'>
                    <p>What's your phone number?</p>
                    <div className='userEditinput'>
                        <input type={'number'} placeholder={'Type Phone'} />
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
                        <input type={'text'} placeholder={'Tell us about yourself'} />
                    </div>
                </div>

            }



            <button className='editProfileUpdate'>
                Update
            </button>
        </div >
    )
}