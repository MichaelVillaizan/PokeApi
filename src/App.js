
import './App.css';
import React from 'react';
import Searcher from './Searcher';
import PokemonsFound from './PokemonsFound';
import AbilitiesSelector from './AbilitiesSelector';

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [abilities ,setAbilities] = React.useState([])
  const [abilitySearched,setAbilitySearched] = React.useState("")
  const [pokemonsBox ,setPokemonsBox] = React.useState([])
  const [shiny ,setShiny] = React.useState("default")
  
  return (<React.Fragment>
      <Searcher
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      setAbilities={setAbilities}
      setShiny={setShiny}
      />
      <AbilitiesSelector
      abilities={abilities}
      setAbilitySearched={setAbilitySearched}
      />
      <PokemonsFound
      abilitySearched={abilitySearched}
      pokemonsBox={pokemonsBox}
      setPokemonsBox={setPokemonsBox}
      shiny={shiny}
      />

      
      </React.Fragment>
  );
}
//llevo dos horas de la sesion del viernes
export default App;
