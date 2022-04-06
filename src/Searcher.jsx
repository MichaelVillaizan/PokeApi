import React from "react";
import { apiRequest } from "./apiRequest";
import "./Searcher.css";


export default function Searcher ( {searchValue,setSearchValue,setAbilities,setShiny}){
    const fetchResults=  (search)=>{
        let searchInput = search.target.value;
        setSearchValue(searchInput);
        
    };
    const searchPoke = async ()=>{
        
        const results =  await apiRequest(searchValue.toLowerCase(),"pokemon");
        if (results){
            
            setAbilities(results.abilities);
            
        }
    };
    const changeShiny = (e) =>{
        if(e.target.checked === true){
            setShiny("shiny")
        };
        if(e.target.checked === false){
            setShiny("default")
        };
    }


    return(
        <div className="searcher-box">
            <label className="switch">
                <input type="checkbox" onChange={changeShiny}/>
                <span className="slider"></span>
            </label>
            <label htmlFor="searcher" className="searcher-label" key={"searcherLabel"}>
                <span>🔍</span>
                <input id ="searcher" className="searcher" type="text" onChange={fetchResults }  value={searchValue}></input>
                <button className="search-button" onClick={searchPoke}>Buscar!</button>
            </label>
        </div>

    );
}