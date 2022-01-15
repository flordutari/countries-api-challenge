import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <Link to="/">
                <h2 className="title">Where in the world?</h2>
            </Link>
            <div className="theme-mode">
                <FontAwesomeIcon icon={faMoon}/>
                <span>Dark Mode</span>
            </div>
        </header>
    )
}
