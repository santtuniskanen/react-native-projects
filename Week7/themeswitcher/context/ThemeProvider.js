import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeProvider({ children }) {
    const [isDarkmode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(prevDarkMode => !prevDarkMode)
    }

    return (
        <ThemeContext.Provider value={{ isDarkmode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}