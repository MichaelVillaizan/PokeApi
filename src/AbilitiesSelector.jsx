import React from "react";
import './AbilitiesSelector.css'
export default function AbilitiesSelector({abilities, setAbilitySearched}){
    let content = [<div key="0">Busca un Pokemon!</div>]

    const clikedAbility = (e) =>{
        setAbilitySearched(e.target.innerHTML)
    }
    if(abilities.length > 0){
        content = [];
        abilities.forEach(element => {
            content.push(<div key={abilities.indexOf(element)} >
            <span  className="ability-box" onClick={clikedAbility}>
           {element.ability.name}
            </span>
            </div>);
        });
      
    }
    
    return(content);

} 