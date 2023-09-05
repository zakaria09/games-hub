import React from 'react';
import { GameDevelopers } from '@/types/developers.type';
import { Card } from './card';

export const GameDevs = ({ developers }: { developers: GameDevelopers }) => {
    return (
        <div className='grid lg:grid-cols-2 gap-6'>
            {
                developers.results.map(devs => 
                    <Card key={devs.id} data={devs}>
                        <div></div>
                    </Card>
                    )
            }
        </div>
    )
};