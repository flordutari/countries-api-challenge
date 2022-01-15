import React, { ChangeEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type SearchBarProps = {
    query: string,
    handleQuery: ChangeEventHandler<HTMLInputElement>
}

export const SearchBar = ({ query, handleQuery }: SearchBarProps) => {
    return (
        <div className="search">
            <i><FontAwesomeIcon icon={faSearch}/></i>
            <input
                type="text"
                value={query}
                className="primary-button input"
                onChange={handleQuery}
                placeholder="Search for a country..."
            />
        </div>
    )
}
