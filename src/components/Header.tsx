import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

export const Header = () => {
    return (
        <header>
            <h2 className="title">Where in the world?</h2>
            <div className="theme-mode">
                <FontAwesomeIcon icon={faMoon}/>
                <span>Dark Mode</span>
            </div>
        </header>
    )
}
