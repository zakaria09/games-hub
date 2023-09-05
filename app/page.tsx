import { GamesList } from '@/components/games';
import { Navbar } from '@/components/navbar';
import { Games } from '@/types/games.type';
import Image from 'next/image'
import { Suspense } from 'react';
import Loading from './loading';

export default async function Home() {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`);
  const games: Games = await res.json();

  return (
    <main className="grid-area">
      <div className='main-content'>
        <Suspense fallback={<Loading />}>
          <GamesList games={games} />
        </Suspense>
      </div>
    </main>
  )
}
