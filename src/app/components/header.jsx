import React from 'react';
import logo from '../util/sih_logo_2024.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Import Link from Next.js
import Head from 'next/head'; // Import Head from Next.js

const Header = () => {
  return (
    <div style={{ fontFamily: 'Anton, sans-serif' }}>
      <Head>
        <title>Your Site Title</title> {/* Set the title of your page */}
      </Head>
      <div className='flex w-full h-20 items-center justify-between'>
        <div className='ml-5'>
          <Image src={logo} alt="Logo" width={150} height={150} />
        </div>
        <div className='flex'>
          <ul className='flex gap-10 text-lg cursor-pointer'>
            <li className='hover:font-bold'>Lorem</li>
            <li className='hover:font-bold'>Lorem</li>
            <li className='hover:font-bold'>lorem</li>
            <li className='hover:font-bold'>lorem</li>
          </ul>
        </div>
        <div className='flex pr-5 gap-5'>
        <Link href="/log-in" passHref>
          <Button className="" variant="outline">Login</Button>
          </Link>
          <Link href="/create-account" passHref>
            <Button className="bg-black text-white outline-none" variant="outline">
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
