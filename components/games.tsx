"use client"
import { Games } from '@/types/games.type';
import React from 'react';
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating';
import { Card } from './card';

export const GamesList = (data: Games ) => {

    return (
        <div className='grid lg:grid-cols-2 gap-6'>
        {
            data.results.map(game => 
                <Card key={game.id} data={game}>
                    <Rating
                        readonly
                        initialValue={Math.round(game.rating * 100) / 100}
                        allowFraction
                        SVGstyle={ { 'display':'inline' } }
                    />
                </Card>
            )
        }
        </div>
    );
}