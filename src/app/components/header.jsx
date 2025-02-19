import React from 'react';
import logo from '../util/hashtag.jpg'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Import Link from Next.js
import Head from 'next/head'; // Import Head from Next.js

const Header = () => {
  return (
    <div style={{ fontFamily: 'Anton, sans-serif' }}>
      <Head>
        <title>hashtag.jemtec</title> 
      </Head>
      <div className='flex w-full h-20 items-center justify-between mt-2'>
        <div className='ml-5'>
          <Image src={logo} alt="Logo" width={80} height={80} />
        </div>
        <div className='flex'>
          <ul className='flex gap-10 text-xl cursor-pointer'>
            <li className='hover:font-bold'>Home </li>
            <li className='hover:font-bold'>About Us</li>
            <li className='hover:font-bold'>Contact us</li>
            <li className='hover:font-bold'>Feedback</li>
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
