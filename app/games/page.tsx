import React, { Suspense } from "react";
import Loading from "../loading";
import { GamesList } from "@/components/games";
import { Pagination } from "@/components/pagination";
import { Games } from "@/types/games.type";

export default async function Games({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"];

  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${page ?? 1}`
  );
  const games: Games = await res.json();

  return (
    <div className="flex flex-col  flex-wrap content-center">
      <GamesList {...games} />
      <Pagination />
    </div>
  );
}
