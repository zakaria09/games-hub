import { GameDevs } from '@/components/game-devs';
import { GamesList } from '@/components/games';
import { Navbar } from '@/components/navbar';
import { Pagination } from '@/components/pagination';
import { GameDevelopers } from '@/types/developers.type';
import { Games } from '@/types/games.type';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams['page'];

  const res = await fetch(
    `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&page=${
      page ?? 1
    }`
  );
  const gameDevelopers: GameDevelopers = await res.json();

  const handlePage = (page: number) => console.log(page);

  return (
    <main>
      <h1>Game Developers</h1>
      <GameDevs developers={gameDevelopers} />
      <Pagination />
    </main>
  );
}
