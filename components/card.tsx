import React from 'react';
import Image from 'next/image';

export const Card = ({
  id,
  image,
  name,
  children,
}: {
  id: number;
  image: string;
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <div key={id} className='card w-96 shadow-xl'>
      <figure>
        <Image
          src={image}
          alt='Shoes'
          width={800}
          height={500}
          style={{ objectFit: 'cover', height: '15em' }}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        {children}
      </div>
    </div>
  );
};
