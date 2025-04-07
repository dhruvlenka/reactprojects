import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

      //method               //prop: children: generic name, example: <div>
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    return (
        // Provider is the property of the context
        // value is the prop of the provider
        <UserContext.Provider value>={{user, setUser}}
        {/* rendering the children */}
        {/* Card Component, or Dashboard, the meaning of showing was that whatever you are ahead it write it down as it is like: card component... */}
        {children} 
        </UserContext.Provider>
    )

}

export default UserContextProvider;