import React from 'react';

export default async function getGame(gameId: string) {
  const res = await fetch(
    `https://api.rawg.io/api/games/${gameId}?key=${process.env.API_KEY}`
  );

  return res.json();
}
