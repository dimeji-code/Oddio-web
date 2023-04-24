import React from 'react'

type Props = {
    text: string
}

const Button = (props: Props) => {
  return (
    <div className='border  text-xl text-[#141414] duration-1000 border-[#1f201f] px-5 py-1 hover:cursor-pointer hover:bg-[#191a19] hover:text-white'>
    {props.text}
    </div>
  )
}

export default Button