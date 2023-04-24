import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export function UserContextProvider(props) {

    const [isLoadding, setIsLoadding] = useState(false);

    return (
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    )
}