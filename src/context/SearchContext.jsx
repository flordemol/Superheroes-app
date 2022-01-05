import { createContext, useState } from 'react';

export const SearchContext = createContext({
    search: [],
    newSearch: () => {},
});

const { Provider } = SearchContext;

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState(null); 

    const newSearch = (data) => {
        setSearch(data);
      };

    return <Provider value={{ search, newSearch }}>{children}</Provider>
}
