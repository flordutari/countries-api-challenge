import React from 'react';

export const Card = (props: any) => {
    const flagStyle = `
        background: url(${props.flag})
        background-size: cover;
		height: 50%;
    `;
    return (
        <div className="card">
            <div className="card-flag">
                <img src={props.flag} alt="" />
            </div>
            <div className="card-details">
                <h3 className="card-title">{props.name}</h3>
                <div><span className="card-subtitle">Population: </span>{props.population}</div>
                <div><span className="card-subtitle">Region: </span>{props.region}</div>
                <div><span className="card-subtitle">Capital: </span>{props.capital}</div>
            </div>
        </div>
    )
}
