import React, { MouseEventHandler, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

type FilterProps = {
    filter: string,
    handleFilter: MouseEventHandler<HTMLParagraphElement>
}

export const Filter = ({ filter, handleFilter }: FilterProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    return (
        <div className="filter">
            <div className="primary-button filter-dropdown input" onClick={() => setIsOpen(!isOpen)}>
                {filter ? filter : 'Filter by Region'}
                <i><FontAwesomeIcon icon={faAngleDown}/></i>
            </div>
            {isOpen ?
                <div className="filter-menu">
                    {regions.map((item, idx) => {
                        return <p
                            className={`filter-item ${filter === item ? 'active' : ''}`}
                            key={`region-${idx}`}
                            onClick={(e) => {handleFilter(e); setIsOpen(false)}}
                        >{item}</p>
                    })}
                </div>
                : <></>
            }
        </div>
    )
}
