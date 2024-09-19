"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Make sure this is imported
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'; // Link for navigation
import logo from '../../util/sih_logo_2024.png';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
 

       

  return (
    <div className="flex my-20 items-baseline justify-center">
      <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200">
        <Image className='pb-2  ' src={logo} height={200} width={200} alt='logo' />
        <h2 className='font-bold text-3xl '>Create An Account</h2>
        <h2 className='text-gray-500'>Enter Your Email and Password to Create an Account</h2>
        <div className='w-full flex flex-col gap-5 mt-7'>
          <Input onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
          <Input onChange={(e) => setEmail(e.target.value)} placeholder='name@example.com' />
          <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
          <Button  disabled={loader || !(username && email && password)}>
            {loader ? <LoaderIcon className='animate-spin' /> : "Create an Account"}
          </Button>
          <p>
            Already Have an Account? 
            <Link className='text-blue-700' href={'/log-in'}>Click Here to Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
