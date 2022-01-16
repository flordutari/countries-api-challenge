import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export const ThemeContextWrapper = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const [theme, setTheme] = useState(themes.dark);

    const changeTheme = (theme: React.SetStateAction<string>) => {
        setTheme(theme);
    }

    useEffect(() => {
        const header = document.querySelector('header');
        const cards = document.querySelectorAll('.card');
        const buttons = document.querySelectorAll('.primary-button');
        
        if (theme === themes.dark) {
            document.body.classList.remove('dark-content');
            if(header) { header.classList.remove('dark-content') };
            if(cards.length) { cards.forEach(el => el.classList.remove('dark-content')) };
            if(buttons.length) { buttons.forEach(el => el.classList.remove('dark-content')) };
        } else {
            document.body.classList.add('dark-content');
            if(header) { header.classList.add('dark-content') };
            if(cards.length) { cards.forEach(el => el.classList.add('dark-content')) };
            if(buttons.length) { buttons.forEach(el => el.classList.add('dark-content')) };
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}