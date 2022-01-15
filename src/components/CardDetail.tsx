import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const CardDetail = () => {
    const country = {
        "name": "Argentina",
        "topLevelDomain": [
          ".ar"
        ],
        "alpha2Code": "AR",
        "alpha3Code": "ARG",
        "callingCodes": [
          "54"
        ],
        "capital": "Buenos Aires",
        "altSpellings": [
          "AR",
          "Argentine Republic",
          "República Argentina"
        ],
        "subregion": "South America",
        "region": "Americas",
        "population": 45376763,
        "latlng": [
          -34,
          -64
        ],
        "demonym": "Argentinean",
        "area": 2780400,
        "gini": 42.9,
        "timezones": [
          "UTC-03:00"
        ],
        "borders": [
          "BOL",
          "BRA",
          "CHL",
          "PRY",
          "URY"
        ],
        "nativeName": "Argentina",
        "numericCode": "032",
        "flags": {
          "svg": "https://flagcdn.com/ar.svg",
          "png": "https://flagcdn.com/w320/ar.png"
        },
        "currencies": [
          {
            "code": "ARS",
            "name": "Argentine peso",
            "symbol": "$"
          }
        ],
        "languages": [
          {
            "iso639_1": "es",
            "iso639_2": "spa",
            "name": "Spanish",
            "nativeName": "Español"
          },
          {
            "iso639_1": "gn",
            "iso639_2": "grn",
            "name": "Guaraní",
            "nativeName": "Avañe'ẽ"
          }
        ],
        "translations": {
          "br": "Argentina",
          "pt": "Argentina",
          "nl": "Argentinië",
          "hr": "Argentina",
          "fa": "آرژانتین",
          "de": "Argentinien",
          "es": "Argentina",
          "fr": "Argentine",
          "ja": "アルゼンチン",
          "it": "Argentina",
          "hu": "Argentína"
        },
        "flag": "https://flagcdn.com/ar.svg",
        "regionalBlocs": [
          {
            "acronym": "USAN",
            "name": "Union of South American Nations",
            "otherAcronyms": [
              "UNASUR",
              "UNASUL",
              "UZAN"
            ],
            "otherNames": [
              "Unión de Naciones Suramericanas",
              "União de Nações Sul-Americanas",
              "Unie van Zuid-Amerikaanse Naties",
              "South American Union"
            ]
          }
        ],
        "cioc": "ARG",
        "independent": true
      };

    const buildString = (obj: any[]) => {
        return obj.reduce((a, b: any, i) => {
            const comma = i + 1 < obj.length ? ', ' : '';
            return a + `${b.name}${comma}`;  
        }, '')
    }
    return (
        <>
            <Link to="/" className="btn primary-button">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Back</span>
            </Link>
            <div className="card-detail-container">
                <div className="detail-flag flag">
                    <img src={country.flag} alt={`${country.name}'s flag`} />
                </div>
                <div className="detail-description">
                    <h1 className="card-title">{country.name}</h1>
                    <section className="details-list">
                        <ul>
                            <li><span className="card-subtitle">Native Name: </span>{country.nativeName}</li>
                            <li><span className="card-subtitle">Population: </span>{country.population.toLocaleString()}</li>
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
                        {country.borders.map(item => {
                            return <span className="primary-button sm-btn">{item}</span>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
