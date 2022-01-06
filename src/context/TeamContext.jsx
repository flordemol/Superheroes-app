import { createContext, useState } from 'react';

export const TeamContext = createContext({
    team: {
        members: [],
        good: 0,
        bad: 0,
    },
    addTeam: () => {},
});

const { Provider } = TeamContext;

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = useState({
        members: [],
        good: 0,
        bad: 0,
    }); 

    const addTeam = (hero) => {
        

       if(team.members.some(item => item.id === hero.id)){
            console.log("El héroe ya es parte del equipo");
        } else {
            if(hero.biography.alignment === "good"){
                if(team.good < 3){
                    team.members.push(hero);
                    team.good++;
                    setTeam(team);
                    console.log("Héroe agregado", team);
                } else {
                    console.log("Ya hay 3 buenos en el equipo");
                }
            } else if(hero.biography.alignment === "bad"){
                if(team.bad < 3){
                    team.members.push(hero);
                    team.bad++;
                    setTeam(team);
                    console.log("Héroe agregado", team);
                } else {
                    console.log("Ya hay 3 malos en el equipo");
                }
            } 
       } 
    };

    return <Provider value={{ team, addTeam }}>{children}</Provider>
}
