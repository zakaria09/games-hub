import { Widgets, WidgetTiles } from '@/types/widgets.type';
import React from 'react';
import Image from 'next/image'

export const Card = ({ data, children }: { data: WidgetTiles; children: React.ReactNode }) => {

    return (
            <div 
                key={data.id} 
                className="card w-96 shadow-xl">
                <figure><Image 
                    src={(data.background_image || data.image_background) ?? ''}
                    alt="Shoes"
                    width={800}
                    height={500}
                    style={{objectFit: "cover", height: "15em"}}
                /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    { children }
                </div>
            </div>
    );
};