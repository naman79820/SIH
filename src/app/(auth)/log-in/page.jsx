"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Import Link for navigation
import { LoaderIcon } from 'lucide-react' // Import your loader icon component or use an appropriate one
import logo from '../../util/sih_logo_2024.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const onSignIn = async () => {
    if (email && password) {
      setLoader(true);
      try {
        // Example sign-in logic (replace with your actual sign-in logic)
        const response = await fetch('/api/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.success) {
          // Redirect on success or handle response as needed
          // e.g., router.push('/dashboard');
        } else {
          // Handle sign-in error
        }
      } catch (error) {
        console.error('Sign-in error:', error);
      } finally {
        setLoader(false);
      }
    }
  };

  return (
    <div>
      <div className='flex my-20 items-baseline justify-center'>
        <div className='flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200'>
          <Image className='mb-5' src={logo} height={200} width={200} alt='logo' />
          <h2 className='font-bold text-3xl'>Sign In to Account</h2>
          <h2 className='text-gray-500'>Enter Your Email and Password to Sign In</h2>
          <div className='w-full flex flex-col gap-5 mt-7'>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder='name@example.com'
              type='email'
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Password'
            />
            <Button
              onClick={onSignIn}
              disabled={!(email && password)}
            >
              {loader ? <LoaderIcon className='animate-spin' /> : "Sign In"}
            </Button>
            <p>Don't Have An Account? <Link className='text-blue-700' href='/create-account'>Create New Account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
