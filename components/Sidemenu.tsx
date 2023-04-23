import React, { useState } from 'react';
import {  XMarkIcon } from '@heroicons/react/24/solid'

type Props = {}


const Sidemenu = (prop: Props) => {

  return (
    <div className="absolute items-center flex flex-col justify-center h-[100vh] w-[100vw] bg-slate-500 ">
        <XMarkIcon className="h-9 w-9 absolute top-4 right-4 hover:cursor-pointer" onClick={()=>{}} />
        <div className='w-[45%] text-center '>
            <h2 className='text-8xl'>MENU</h2>
            <hr className='border-top border-white divide-y'/>
            <ul className='text-6xl'>
                <li className='text-black my-5 duration-1000 hover:text-[#352650e2] hover:cursor-pointer'>HOME</li>
                <li className='text-black my-5 duration-1000 hover:text-[#352650e2] hover:cursor-pointer'>CART</li>
                <li className='text-black my-5 duration-1000 hover:text-[#352650e2] hover:cursor-pointer'>CAREERS</li>
         
            </ul>
        </div>
     
    </div>
  );
}

export default Sidemenu;
