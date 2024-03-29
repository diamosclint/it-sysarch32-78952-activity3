import React, { useState, useEffect } from 'react';

const Pokemon = ({ pokemon, language }) => {
  const { id, name, type, base, image } = pokemon;

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
    <div className="pokemon border border-slate-300 p-4 grid justify-center text-center m-6 w-auto h-auto gap-1 font-vt323">
        <div className='flex flex-col items-center'> {/* Wrap image and center vertically */}
          <img className='h-24 w-24' src={image} alt={name.english} />
        </div>
        <div className='flex justify-center gap-2 text-xl font-medium'>
          <p>ID: [{id}]</p>
          <p>Name: {renderName()}</p>
        </div>
        <div className="flex justify-center">
          {type.map((t, index) => (
            <p key={index} className="border border-slate-300 rounded-full px-2 mx-1">
              {t}
            </p>
          ))}
        </div>
        <div className='flex gap-4 justify-center text-slate-600'>
          <p>HP: {base.HP}</p>
          <p>Speed: {base.Speed}</p>
        </div>
        <div className='flex gap-4 justify-center text-slate-600'>
          <p>Attack: {base.Attack}</p>
          <p>Sp. Attack: {base['Sp. Attack']}</p>
        </div>
        <div className='flex gap-4 justify-center text-slate-600'>
          <p>Defense: {base.Defense}</p>
          <p>Sp. Defense: {base['Sp. Defense']}</p>
        </div>
    </div>
  );
};

export default Pokemon;