import React, { FormEvent, useState } from 'react';
import { CardList } from './CardList';
import { Filter } from './Filter';
import { SearchBar } from './SearchBar';

export const Home = () => {
    const [query, setQuery] = useState('');

    const handleQuery = (e: FormEvent<HTMLInputElement>): void => {
        setQuery(e.currentTarget.value);
    };

    return (
        <main className="main">
            <div className="filters-container">
                <SearchBar
                    query={query}
                    handleQuery={handleQuery}
                />
                <Filter />
            </div>
            <CardList search={query}/>
        </main>
    )
}
