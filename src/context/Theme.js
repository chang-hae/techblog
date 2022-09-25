import * as React from 'react';
import { createContext } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    return (
        <ThemeContext.Provider
            value={{
                primary: "royalblue"
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContextProvider, ThemeContext };