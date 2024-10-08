import React from 'react'
import logo from '../util/sih_logo_2024.png'
import Image from 'next/image'

const Footer = () => {
  return (
  <div>
    <footer className="bg-gray-50 mt-10">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      <Image src={logo} alt="Logo" width={150} height={150} />
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2024. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  </div>
  )
}

export default Footer
