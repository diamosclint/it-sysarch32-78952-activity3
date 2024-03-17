import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon'; // Import the Pokemon component

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then(response => response.json())
      .then(data => setPokemonList(data));
  }, []);

  const changeLanguage = selectedLanguage => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="pokedex">
      <div className="language-buttons flex gap-2 ml-4 mt-4">
        <button className='border border-slate-300 p-2 hover:text-yellow-300' onClick={() => changeLanguage('English')}>English</button>
        <button className='border border-slate-300 p-2' onClick={() => changeLanguage('Japanese')}>Japanese</button>
        <button className='border border-slate-300 p-2' onClick={() => changeLanguage('Chinese')}>Chinese</button>
        <button className='border border-slate-300 p-2'onClick={() => changeLanguage('French')}>French</button>
      </div>
      <div className="pokemon-list grid grid-cols-3">
        {pokemonList.map((pokemon, index) => (
          <Pokemon key={index} pokemon={pokemon} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
