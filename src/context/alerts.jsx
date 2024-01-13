import { createContext, useState } from "react";

export const AlertContext = createContext()

export function AlertProvider( { children }) {
    const Chevron = (
        <p>Testing</p>
      );

    const [alert, setAlert] = useState(Chevron)

    return (
        <AlertContext.Provider value={{
            alert, setAlert
        }}
        >
            {children}
        </AlertContext.Provider>
    )
}