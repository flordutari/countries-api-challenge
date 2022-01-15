import React from 'react';
import { CardContainer } from './CardContainer';
import { SearchBar } from './SearchBar';

export const Main = () => {
    return (
        <main className="main">
            <SearchBar />
            <CardContainer />
        </main>
    )
}
