import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Loader } from './Loader';

export const CardDetail = () => {
    const [country, setCountry] = useState<any>({});
    const [dataLoading, setDataLoading] = useState(false);
    const location = useLocation();

	useEffect(() => {
        const currentPath = location.pathname;
		getSingleCountry(currentPath);
	}, [])

	const getSingleCountry = async (path: string) => {
        setDataLoading(true);
		try {
			const resp = await axios.get(`https://restcountries.com/v2/name/${path}`);
			setCountry(resp.data[0]);
            setDataLoading(false);
		} catch (err) {
            setDataLoading(false);
			console.error(err);
		}
	};
    
    const buildString = (obj: any[]) => {
        if (obj && obj.length) {
            return obj.reduce((a, b: any, i) => {
                const comma = i + 1 < obj.length ? ', ' : '';
                return a + `${b.name}${comma}`;  
            }, '')
        }
        return '';
    }

    return (
        <div className="main">
            <div className="buttons-container">
                <Link to="/" className="btn primary-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Back</span>
                </Link>
            </div>
            {dataLoading ?
                <Loader />
                :
                <div className="card-detail-container">
                    <div className="detail-flag flag">
                        <img src={country.flag} alt={`${country.name}'s flag`} />
                    </div>
                    <div className="detail-description">
                        <h1 className="card-title">{country.name}</h1>
                        <section className="details-list">
                            <ul>
                                <li><span className="card-subtitle">Native Name: </span>{country.nativeName}</li>
                                <li><span className="card-subtitle">Population: </span>{country.population && country.population.toLocaleString()}</li>
                                <li><span className="card-subtitle">Region: </span>{country.region}</li>
                                <li><span className="card-subtitle">Sub Region: </span>{country.subregion}</li>
                                <li><span className="card-subtitle">Capital: </span>{country.capital}</li>
                            </ul>
                            <ul>
                                <li><span className="card-subtitle">Top Level Domain: </span>{country.topLevelDomain}</li>
                                <li><span className="card-subtitle">Currencies: </span>{buildString(country.currencies)}</li>
                                <li><span className="card-subtitle">Languages: </span>{buildString(country.languages)}</li>
                            </ul>
                        </section>
                        <div className="detail-footer">
                            <span className="card-subtitle">Border Countries: </span>
                            <p className="border-countries">
                                {country.borders && country.borders.length ?
                                    country.borders.map((item: string) => {
                                        return <span key={item} className="primary-button sm-btn">{item}</span>
                                    })
                                    : <div>--</div>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
