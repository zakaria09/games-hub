import { GamesList } from '@/components/games';
import { Games } from '@/types/games.type';
import Image from 'next/image'

export default async function Home() {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`);
  const games: Games = await res.json();

  return (
    <main className="grid-area">
      <nav className='nav'></nav>
      <div className='main-content'>
        <GamesList games={games} />
      </div>
      <div className='sidebar'></div>
    </main>
  )
}
