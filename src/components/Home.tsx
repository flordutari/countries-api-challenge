import React, { FormEvent, useState } from 'react';
import { CardList } from './CardList';
import { Filter } from './Filter';
import { SearchBar } from './SearchBar';

export const Home = () => {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');

    const handleQuery = (e: FormEvent<HTMLInputElement>): void => {
        setQuery(e.currentTarget.value);
    };

    const handleFilter = (e: FormEvent<HTMLParagraphElement>): void => {
        setFilter(e.currentTarget.innerText);
    };

    return (
        <main className="main">
            <div className="buttons-container">
                <SearchBar
                    query={query}
                    handleQuery={handleQuery}
                />
                <Filter
                    filter={filter}
                    handleFilter={handleFilter}
                />
            </div>
            <CardList search={query} filter={filter}/>
        </main>
    )
}
