import { GamesList } from "@/components/games";
import { Navbar } from "@/components/navbar";
import { Games } from "@/types/games.type";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";
import { Pagination } from "@/components/pagination";
import { useSearchParams } from "next/navigation";

export default async function Home({
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
    <main className="grid-area">
      <div className="main-content">
        <Suspense fallback={<Loading />}>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
                height={500}
                width={500}
                alt=""
              />
              <div>
                <h1 className="text-5xl font-bold">Games Hub</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </main>
  );
}
