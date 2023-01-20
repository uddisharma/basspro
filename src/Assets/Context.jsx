import React, { createContext, useState } from 'react'
export const Context = createContext();
function ContextProvider({ children }) {
    const [val, setval] = useState('')

    return (
        <Context.Provider value={{ val, setval }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider