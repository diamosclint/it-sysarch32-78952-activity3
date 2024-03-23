import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon'; // Import the Pokemon component

const Pokedex = () => {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState('English');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://us-central1-it-sysarch32.cloudfunctions.net/pagination?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.data || []);
        setTotalPages(data.totalPages || 1);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [currentPage]);

  const changeLanguage = selectedLanguage => {
    setLanguage(selectedLanguage);
  };

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="pokedex font-merriweather">
      <div className="language-buttons flex gap-2 ml-4 mt-4">
        <button className='border border-slate-300 p-2 hover:text-yellow-300' onClick={() => changeLanguage('English')}>English</button>
        <button className='border border-slate-300 p-2' onClick={() => changeLanguage('Japanese')}>Japanese</button>
        <button className='border border-slate-300 p-2' onClick={() => changeLanguage('Chinese')}>Chinese</button>
        <button className='border border-slate-300 p-2' onClick={() => changeLanguage('French')}>French</button>
      </div>
      <div className="pagination flex mt-4 justify-center">
        <button className='border border-solid p-2' onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button className='p-4 border border-solid ml-4 hover:bg-yellow-300' key={i + 1} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
        ))}
        <button className='border border-solid p-2 ml-4' onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
      <div className='ml-16 mt-4'>Current Page: {currentPage}</div>
      <div className='ml-16'>Total Pages: {totalPages}</div>
      {loading && <p className='text-center mt-4'>Loading...</p>}
      <div className="pokemon-list grid grid-cols-5">
        {pokemonList.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;