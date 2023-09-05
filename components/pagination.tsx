"use client"
import React, { useState } from 'react';

export const Pagination = () => {
    const [ page, setPage ] = useState<number>(1);

    return (
        <div className='flex content-center my-4 p-4 justify-center'>
            <div className="join">
                <button className="join-item btn" onClick={() => setPage(prev => prev - 1)}>«</button>
                <button className="join-item px-4">Page { page }</button>
                <button className="join-item btn" onClick={() => setPage(prev => prev + 1)}>»</button>
            </div>
        </div>
    )
};