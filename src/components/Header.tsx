import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonFill } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export const Header = () => {
    const [darkMode, setDarkMode] = React.useState(true);

    return (
        <header>
            <Link to="/">
                <h2 className="title">Where in the world?</h2>
            </Link>
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <div className="theme-mode"
                        onClick={() => {
                            setDarkMode(!darkMode);
                            changeTheme(darkMode ? themes.light : themes.dark);
                        }}
                    >
                        <FontAwesomeIcon icon={!darkMode ? faMoonFill : faMoon}/>
                        <span>Dark Mode</span>
                    </div>
                )}
            </ThemeContext.Consumer>
        </header>
    )
}