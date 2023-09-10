import getGame from '@/lib/getGame';
import React from 'react';
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  };
}

export default async function Game({params}: Props) {
  const game: Game = await getGame(params.id);

  return (
    <div className=' bg-gradient-to-b from-slate-50 to-slate-300'>
      <div className='max-w-64'>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='h-5 w-5'
          >
            <path d='M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'></path>
          </svg>
        </button>
        <div className='hero'>
          <div className='hero-content flex-col lg:flex-row'>
            <Image
              className='max-w-sm rounded-lg shadow-2xl'
              width={800}
              height={500}
              src={game.background_image}
              alt={game.name}
            />
            <div>
              <h1 className='text-5xl font-bold'>{game.name}</h1>
              <p className='py-6'>{game.description_raw}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
