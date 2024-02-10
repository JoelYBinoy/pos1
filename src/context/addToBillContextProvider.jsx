import React, {useState} from 'react'

import addToBillContext from './addToBillContext'

const AddToBillContextProvider = ({children})=> {

    const [addToBill,setAddToBill] = useState([])
    const [recentPurchase , setRecentPurchase] = useState([])
    const [favorites,setFavorites] = useState([])
    return (
        <addToBillContext.Provider value={{addToBill,setAddToBill,recentPurchase,setRecentPurchase , favorites,setFavorites}} >

                {children}

        </addToBillContext.Provider>
    )
}

export default AddToBillContextProvider