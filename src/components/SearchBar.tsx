import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = () => {
    return (
        <div className="input-container">
            <i><FontAwesomeIcon icon={faSearch}/></i>
            <input type="text" className="button" placeholder="Search for a country..."/>
        </div>
    )
}
