import React, { useState, useContext } from 'react';
import ProfilefallbackImage from '../icons/profilefallback.png';
const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()
const UseGlobalState = () => useContext(GlobalStateContext)
const UseGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

function GlobalStateProvider({ children }) {
    const [data, setData] = useState({
        profileImage: ProfilefallbackImage,
        name: '',
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