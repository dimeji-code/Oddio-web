import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    const date = new Date().getFullYear();

  return (
    <div className='h-[8.5vh] w-full bg-[#0e0e0e] z-40 flex justify-center items-center'>
       <h4 className='text-white'> © {date} dimeji-code. All rights reserved. </h4> 
    </div>
  )
}

export default Footer