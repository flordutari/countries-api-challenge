import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { Card } from './Card';
import { Loader } from './Loader';

type CardListProps = {
  search: string,
  filter: string
}

export const CardList = ({search, filter}: CardListProps) => {
    const [countries, setCountries] = useState<any[]>([]);
    const [dataLoading, setDataLoading] = useState(false);

	useEffect(() => {
		getAllCountries();
	}, []);

	let results = countries;
	if (search) {
		results = countries.filter((({name, region, capital}) => {
			const valuesToSearch = [name, region, capital].map(val => ` ${val}`.toLowerCase());
			return valuesToSearch.join('.').includes(search.toLowerCase());
		}));
	}
	if (filter) {
		const dataToFilter = search && results.length ? results : countries;
		results = dataToFilter.filter(item => item.region === filter);
	}

	const getAllCountries = async () => {
        setDataLoading(true);
		try {
			const resp = await axios.get('https://restcountries.com/v2/all');
			setCountries(resp.data);
            setDataLoading(false);
		} catch (err) {
			console.error(err);
            setDataLoading(false);
		}
	};

    return (
        <div className="card-container">
			{dataLoading ?
                <Loader />
                :
				<>
					{results.length ? 
						results
						.filter(({name, region, capital}) => {
							const valuesToSearch = [name, region, capital].map(val => ` ${val}`.toLowerCase());
							return valuesToSearch.join('.').includes(search.toLowerCase());
						})
						.map((item, idx) => {
							return <Card
								key={`${item.cioc}-${idx}`}
								name={item.name}
								population={item.population}
								region={item.region}
								capital={item.capital}
								flag={item.flags.png}
								code={item.cioc}
							/>
						})
						:
						<div>Sorry, there were no countries found</div>
					}
				</>
			}
        </div>
    )
}