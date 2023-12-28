import { createContext, useState } from "react";

// crear contexto
export const DirContext = createContext()

// crear provider
export function DirProvider( { children }) {
    const [text, setText] = useState('')

    return (
        <DirContext.Provider value={{
            text, 
            setText
        }}>
            {children}
        </DirContext.Provider>
    )
}
