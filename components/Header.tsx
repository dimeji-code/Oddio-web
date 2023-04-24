import React, { useEffect, useState } from 'react'
import { Bars3Icon, UserIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Rajdhani } from 'next/font/google';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const rajdhani = Rajdhani({ weight:['300','400','500','700'],  subsets: ['latin'],});

type Props = {}

const Header = (props: Props) => {
  const [open, setOpen ] = useState(false)
  const [total, setTotal] = useState(0)
  const cartItems = useSelector((state:any) => state.cart.totalItems)

useEffect(() => {
  console.log("Total AMT HEADER : ", cartItems);
  console.log("Type of Total AMT HEADER : ",typeof(cartItems) );
  // setTotal(Number(localStorage.getItem('totalItems')||0))
  setTotal(cartItems)
},[cartItems])

  return (
 
  //   <header className="flex z-1 flex-row px-[10%] justify-between items-center bg-[#ffffff]  text-[#131313] h-[6.5vh]">
  //       <h1 className={`${rajdhani.className} text-3xl font-light`}><Link href="/">⏣dd-i⏣</Link></h1>
  //       <ul className='hidden md:flex flex-row items-center text-base font-light'>
  //           <li className='mr-4 z-20 border-b border-b-[transparent] hover:cursor-pointer hover:border-b-black duration-1000'><Link href='/'>home</Link></li>
  //           <li className='mr-4 z-20 border-b border-b-[transparent] hover:cursor-pointer hover:border-b-black duration-1000'><Link href='/about'>about</Link></li>
  //           <li className='mr-6 border-b border-b-[transparent] hover:cursor-pointer hover:border-b-black duration-1000  z-20 '>
  //             <a className={`flex flex-row ${Object.keys(cartItems)?'cartLogo':' '} `}  href='/cart'>
  //             cart <ShoppingCartIcon className="h-6 w-6  cursor-pointer " />
  //             </a> 
  //           </li>
  //           <li onClick={()=>{}} className=' flex z-20 flex-row text-[#1f231f] bg-white duration-1000 hover:bg-[#212121] hover:text-white hover:cursor-pointer  rounded-e-2xl border-[0.8px] border-[#1e1e1e] py-1 px-2'> 
  //           signin
  //           <UserIcon className="h-6 w-6  cursor-pointer" />
  //           </li>
  //       </ul>
      
  //       <Bars3Icon
  //        onClick={()=>{}} className="h-8 w-8 z-20 md:hidden bg-slate-100 border-slate-200 hover:cursor-pointer"  />
  // </header>
  
  
  
  
  <header className={`w-full fixed top-0 left-0  duration-500 z-40 ${open?'bg-white':'bg-transparent'} `}>
    <div className="md:flex  md:h-[6.5vh] items-center justify-between bg-transparent md:bg-transparent py-4 ">
      <h1 className={`${rajdhani.className} text-3xl font-light md:pl-[10%] px-7`}><Link href="/">⏣dd-i⏣</Link></h1>
     
     {!open? <Bars3Icon 
      onClick={()=>{setOpen(!open)}} 
      className="h-8 w-8 z-[80] absolute top-4 right-8 md:hidden duration-700 text-black  border-slate-200 hover:cursor-pointer"  
      /> :
      <XMarkIcon 
      onClick={()=>{setOpen(!open)}} 
      className="h-8 w-8 z-[80] absolute top-4 right-8 md:hidden duration-700 text-black  border-slate-200 hover:cursor-pointer"  
      />
     }

      <ul 
      className= 
      {`md:flex md:items-center md:pb-0 pb-12 shadow-md md:shadow-none md:pr-[10%] max-md:w-full max-md:absolute  bg-white md:bg-transparent  md:z-auto z-[-1] transition-all text-base font-light duration-500 ${open? 'top-[9vh] md:opacity-100  ':'top-[-500px]'} `} >
          <li 
          className='max-md:text-2xl max-md:py-7 max-md:border-b-slate-600 md:mr-4 z-20 border-b border-b-[transparent] text-center hover:cursor-pointer hover:border-b-black duration-1000'>
            <Link href='/'>Home</Link>
          </li>
          <li 
          className='max-md:text-2xl max-md:py-7 max-md:border-b-slate-600 md:mr-4 z-20 border-b border-b-[transparent] text-center hover:cursor-pointer hover:border-b-black duration-1000'>
            <Link href='/about'>About</Link>
          </li>
          <li 
          className='max-md:text-2xl max-md:py-7 max-md:border-b-slate-600 md:mr-6 border-b border-b-[transparent]  hover:cursor-pointer hover:border-b-black duration-1000  z-20 '>
            <Link 
            after-dynamic-value={total}
            className= {`flex justify-center items-center flex-row 
            after:flex after:content-[attr(after-dynamic-value)] after:items-center after:justify-center after:p-2 after:text-white
            after:text-sm after:bg-red-600 after:top-0 after:w-4 after:h-4 after:rounded-[50%]  `} 
            href='/cart'>
            Cart<span> <ShoppingCartIcon className="h-6 w-6  cursor-pointer " /> </span> 
            </Link> 
          </li>
          <Link href='/authenticate'  className='max-md:text-2xl max-md:py-7 max-md:border-b-slate-600 justify-center items-center border-b border-b-[transparent] flex z-40 flex-row text-[#1f231f] md:bg-white duration-1000 hover:bg-[#212121] hover:text-white hover:cursor-pointer  md:rounded-e-2xl md:border-[0.8px] md:border-[#1e1e1e] py-1 md:px-2'> 
          Signin
          <UserIcon className="h-6 w-6  cursor-pointer" />
          </Link>
      </ul>
    </div>
  


</header>
  
  
  )
}

export default Header