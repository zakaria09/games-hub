import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
    return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Games Hub</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link href="/developers">Games Developers</Link></li>
      </ul>
    </div>
  </div>
  )
}