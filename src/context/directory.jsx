import { createContext, useState } from "react";

// crear contexto
export const DirContext = createContext()

// crear provider
export function DirProvider( { children }) {
    const [pathA, setPathA] = useState('PRUEBA PATH A')

    return (
        <DirContext.Provider value={{
            pathA, 
            setPathA
        }}>
            {children}
        </DirContext.Provider>
    )
}
