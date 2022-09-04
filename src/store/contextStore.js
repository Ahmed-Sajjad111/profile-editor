import React, { useState, useContext } from 'react';
import ProfilefallbackImage from '../icons/profilefallback.png';
//Create new contexts for global state and update functions and store it in variables
const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()
//Define new components that returns value of GlobalStateContext and GlobalStateUpdateContext
const UseGlobalState = () => useContext(GlobalStateContext)
const UseGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

//Set initial state of data and return an updated state of data
function GlobalStateProvider({ children }) {
    const [data, setData] = useState({
        profileImage: ProfilefallbackImage,
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        phone: '',
    })


    return (

        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>

    )
}


export { UseGlobalState, UseGlobalStateUpdate, GlobalStateProvider }