import React from "react";
import { apiRequest } from "./apiRequest";


export default function Searcher ( {searchValue,setSearchValue,setAbilities}){
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


    return(
        <label htmlFor="searcher" className="searcher-label" key={"searcherLabel"}>
        <span>🔍</span>
        <input id ="searcher" className="searcher" type="text" onChange={fetchResults }  value={searchValue}></input>
        <button onClick={searchPoke}>Buscar!</button>
        </label>

    );
}