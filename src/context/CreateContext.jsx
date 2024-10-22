import { createContext, useState } from "react";


export const AppContext = createContext()


export const CreateContext = ({ children }) => {

    const [barOpen, setBarOpen] = useState(false)
    return (
        <AppContext.Provider
            value={{
                barOpen, setBarOpen
            }}>
            {children}
        </AppContext.Provider>
    )
}