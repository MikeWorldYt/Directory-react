import PropTypes from 'prop-types';
import { createContext } from "react";

// crear contexto
export const DirContext = createContext()

// crear provider
export function DirProvider( { children }) {

    return (
        <DirContext.Provider value={{

        }}>
            {children}
        </DirContext.Provider>
    )
}

DirProvider.propTypes = {
    children: PropTypes.node
}