import React from 'react';
import logo from '../util/sih_logo_2024.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Head from 'next/head'; // Import Head from Next.js

const Header = () => {
  return (
    <div style={{ fontFamily: 'Anton, sans-serif' }}>
      
      <div className='flex w-full h-20 items-center justify-between'>
        <div className='ml-5'>
          <Image src={logo} alt="Logo" width={150} height={150} />
        </div>
        <div className='flex'>
          <ul className='flex gap-10 text-lg cursor-pointer  ' >
            <li className='hover:font-bold'>Lorem</li>
            <li className='hover:font-bold'>Lorem</li>
            <li className='hover:font-bold'>lorem</li>
            <li className='hover:font-bold'>lorem</li>
          </ul>
        </div>
        <div className='flex pr-5 gap-5'>
          <Button className="" variant="outline">Login</Button>
          <Button className="bg-black text-white outline-none" variant="outline">Signup</Button>
        </div>
      </div>
      </div>
  );
};

export default Header;
