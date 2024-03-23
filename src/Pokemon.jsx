import React from 'react';

const Pokemon = ({ pokemon, language }) => {
  const { id, name, image } = pokemon;

  const renderName = () => {
    switch (language) {
      case 'Japanese':
        return name.japanese;
      case 'Chinese':
        return name.chinese;
      case 'French':
        return name.french;
      default:
        return name.english;
    }
  };

  return (
    <div className="pokemon border border-slate-300 p-4 grid justify-center text-center m-6 gap-4">
        <img className='h-16 w-16 flex justify-center ml-6' src={image} alt={name.english} />
        <p>ID: {id}</p>
        <p>Name: {renderName()}</p>
    </div>
  );
};

export default Pokemon;
