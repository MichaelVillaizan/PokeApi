import React from "react";

export default function AbilitiesSelector({abilities, setAbilitySearched}){
    let content = [<div key="0">Busca un Pokemon!</div>]

    const clikedAbility = (e) =>{
        setAbilitySearched(e.target.innerHTML)
    }
    if(abilities.length > 0){
        content = [];
        abilities.forEach(element => {
            content.push(<div key={abilities.indexOf(element)}><a onClick={clikedAbility} className="ability-box">{element.ability.name}</a></div>);
        });
      
    }
    
    return(content);

} 