import React from 'react';
import GameElement from './GameElement';

const GamesGrid = () => {
  return (
    <div className="w-1/1 mx-auto">
      <h2 className="text-xl font-bold mb-4">Games</h2>
      <div className="flex flex-wrap">
        <GameElement />
        <GameElement />
        <GameElement />
        <GameElement />
        {/* Add more game elements here */}
      </div>
    </div>
  );
};

export default GamesGrid;
