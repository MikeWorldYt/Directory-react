import { createContext, useState } from "react";

// crear contexto
export const DirContext = createContext()

// crear provider
export function DirProvider( { children }) {
    const [pathA, setPathA] = useState('')
    const [pathB, setPathB] = useState('')
    const [pathC, setPathC] = useState('')

    return (
        <DirContext.Provider value={{
            pathA, setPathA,
            pathB, setPathB,
            pathC, setPathC
        }}>
            {children}
        </DirContext.Provider>
    )
}
