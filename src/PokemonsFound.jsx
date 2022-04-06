import React from "react";
import { apiRequest } from "./apiRequest";
import './PokemonsFound.css'


export default function PokemonsFound({abilitySearched,pokemonsBox,setPokemonsBox,shiny}){

    const updatePokes = async() =>{
        const data = await apiRequest(abilitySearched,"ability");
        
        if(data.pokemon) {
            const pokes = [];
            data.pokemon.forEach( async(element) => {
                const pokemon = await apiRequest(element.pokemon.name,"pokemon")
                console.log()
                let sprite = pokemon.sprites.front_default;
                if(shiny==="shiny"){
                sprite =pokemon.sprites.front_shiny;
                }
                pokes.push(<div className="Pokemon-Card" key={element.pokemon.name} ptype={pokemon.types[0].type.url} ><p>{element.pokemon.name}</p><img src={sprite} alt="pokemon sprite"></img></div>)
                
                if(pokes.length === data.pokemon.length){
                    //ordenamos por tipo
                    //problemas serios con el ordenamiento dadas las peticiones del API
                    const pokesSorted = pokes.sort((a, b) => { 
                        const aNumber = parseInt(a.props.ptype.match(/(\d+)/g)[1]);
                        const bNumber = parseInt(b.props.ptype.match(/(\d+)/g)[1]);
                        return (aNumber - bNumber);
                        });
                    
                    setPokemonsBox(<React.Fragment>
                    <div key="placeholder" ptype="0" className="title"><h4>Pokemones que cuentan con la habilidad {data.name}/{data.names[5].name}</h4></div>
                    <div className="pokemonsBox">{pokesSorted}</div>
                    </React.Fragment>);
                    
                } 
            });
        }
        
        
        
        
    }

    React.useEffect(
        ()=>{
        updatePokes()
        },[abilitySearched]
    )

    return(<div >{pokemonsBox}</div>);
}