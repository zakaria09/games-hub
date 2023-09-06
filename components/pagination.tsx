'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export const Pagination = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get('page');

  return (
    <div className='flex content-center my-4 p-4 justify-center'>
      <div className='join'>
        <Link
          className='join-item btn'
          href={`?page=${Number(page) < 0 ? Number(page) - 1 : 1}`}
        >
          «
        </Link>
        <button className='join-item px-4'>Page {page}</button>
        <Link className='join-item btn' href={`?page=${Number(page) + 1}`}>
          »
        </Link>
      </div>
    </div>
  );
};
