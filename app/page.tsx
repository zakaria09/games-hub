'use server';
import { GamesList } from '@/components/games';
import { Navbar } from '@/components/navbar';
import { Games } from '@/types/games.type';
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from './loading';
import { Pagination } from '@/components/pagination';
import { useSearchParams } from 'next/navigation';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams['page'];

  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${page ?? 1}`
  );
  const games: Games = await res.json();

  return (
    <main className='grid-area'>
      <div className='main-content'>
        <Suspense fallback={<Loading />}>
          <GamesList {...games} />
          <Pagination />
        </Suspense>
      </div>
    </main>
  );
}
