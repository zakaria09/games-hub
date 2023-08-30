"use client"
import { Games } from '@/types/games.type';
import React from 'react';
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating';

export const GamesList = (data: { games: Games }) => {

    return (
        <div className='grid grid-cols-2 gap-6'>
            {
                data.games.results.map(game => 
                    <div 
                        key={game.id} 
                        className="card w-96 shadow-xl">
                        <figure><Image 
                            src={game.background_image}
                            alt="Shoes"
                            width={800}
                            height={500}
                            style={{objectFit: "cover", height: "15em", width: "100%"}}
                        /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{game.name}</h2>
                            <Rating
                                readonly
                                initialValue={Math.round(game.rating * 100) / 100}
                                allowFraction
                                SVGstyle={ { 'display':'inline' } }
                            />
                        </div>
                    </div>
                )
            }
        </div>
    );
}