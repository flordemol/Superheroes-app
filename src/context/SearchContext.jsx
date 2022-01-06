import { createContext, useState } from 'react';

export const SearchContext = createContext({
    search: null,
    nameHero: "",
    newSearch: () => {},
});

const { Provider } = SearchContext;

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState(null); 
    const [nameHero, setNameHero] = useState(""); 

    const newSearch = (data) => {
        setSearch(data);
      };

    return <Provider value={{ search, newSearch, nameHero, setNameHero }}>{children}</Provider>
}
