import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { Loader } from './Loader';

type CardListProps = {
  search: string
}

export const CardList = ({search}: CardListProps) => {
    const [countries, setCountries] = useState<any[]>([]);
    const [dataLoading, setDataLoading] = useState(false);

	useEffect(() => {
		getAllCountries();
	}, [])

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
					{countries
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
					})}
				</>
			}
        </div>
    )
}