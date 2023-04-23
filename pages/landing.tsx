import Link from 'next/link'
import React from 'react'

const Landing = () => {

   
  return (
    <div className='w-full min- h-[100vh] pt-[10vh]   flex flex-col'>

        <div className='w-full h-full md:h-3/4 flex flex-col md:flex-row z-30'>
            <div className='max-md:h-1/2 md:w-1/2  flex flex-col justify-center items-center text-left py-4 text-xl md:text-4xl'>
                <div>
                    <div className='flex w-[60px] h-[60px]'>
                        <img src="./sound.png" alt="sound" className="" />
                    </div>

                    <h4 className='my-3'>Everything Sound.</h4>
                    <h4 className='my-3'>Everything Audio.</h4>
                    <h4 className='my-3'>Everything ⏣dd-i⏣.</h4>
                    <Link href='/browse' className='border z-[90] text-xl text-[#141414] duration-1000 border-[#1f201f] px-5 py-1 hover:cursor-pointer hover:bg-[#191a19] hover:text-white'>
                        Browse Items
                    </Link>
                </div>

            </div>
            <div className='max-md:h-1/2 md:w-1/2 z-20  flex flex-col items-center justify-center md:py-5'>
                <div className='flex h-full md:h-3/4 max-md:justify-center'>
                    <img src="./hp2.png" alt="sound" className="max-h-4/5" />
                </div>

            </div>

        </div>


        <div className="custom-shape-divider-bottom-1681508295 z-20">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M310 0L0.03 0 0.91 249.97 60z" className="shape-fill "></path>

            </svg>
        </div>


    </div>
  )
}

export default Landing