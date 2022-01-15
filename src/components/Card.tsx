import React from 'react';
import { Link } from 'react-router-dom';

export const Card = (props: any) => {
    return (
        <Link to={`/detail/${props.name}`} className="card">
            <div className="card-flag flag">
                <img src={props.flag} alt={`${props.name}'s flag`} />
            </div>
            <div className="card-details">
                <h2 className="card-title">{props.name}</h2>
                <div><span className="card-subtitle">Population: </span>{props.population.toLocaleString()}</div>
                <div><span className="card-subtitle">Region: </span>{props.region}</div>
                <div><span className="card-subtitle">Capital: </span>{props.capital}</div>
            </div>
        </Link>
    )
}
