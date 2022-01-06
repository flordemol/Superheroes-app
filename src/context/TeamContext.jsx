import { createContext, useState } from 'react';

export const TeamContext = createContext({
    team: [],
    addTeam: () => {},
});

const { Provider } = TeamContext;

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState([]); 

    const addTeam = (hero) => {
       if(team.some(item => item.id === hero.id)){
            console.log("El héroe ya es parte del equipo");
        } else {
            team.push(hero);
            setTeam(team);
            console.log("Héroe agregado", team)
       } 
    };

    return <Provider value={{ team, addTeam }}>{children}</Provider>
}
