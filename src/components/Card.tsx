import React from 'react';
import { Link } from 'react-router-dom';

export const Card = (props: any) => {
    const flagStyle = `
        background: url(${props.flag})
        background-size: cover;
		height: 50%;
    `;
    return (
        <Link to={`/${props.code}`} className="card">
            <div className="card-flag flag">
                <img src={props.flag} alt={`${props.name}'s flag`} />
            </div>
            <div className="card-details">
                <h3 className="card-title">{props.name}</h3>
                <div><span className="card-subtitle">Population: </span>{props.population.toLocaleString()}</div>
                <div><span className="card-subtitle">Region: </span>{props.region}</div>
                <div><span className="card-subtitle">Capital: </span>{props.capital}</div>
            </div>
        </Link>
    )
}
