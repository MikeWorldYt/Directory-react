import { createContext, useState } from "react";

// 1. Create context
export const DirContext = createContext()

// 2. Crear provider
export function DirProvider( { children }) {
  const [pathA, setPathA] = useState('')
  const [pathB, setPathB] = useState('')
  const [pathC, setPathC] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <DirContext.Provider value={{
      pathA, setPathA,
      pathB, setPathB,
      pathC, setPathC,
      isModalOpen, setIsModalOpen
    }}>
      {children}
    </DirContext.Provider>
  )
}