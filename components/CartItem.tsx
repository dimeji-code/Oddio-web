import React from 'react'
import { XCircleIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '@/reducers/cartReducer'

type Props = {
    id:string,
    img:string,
    title:string,
    count:number,
    amount:number
}

const CartItem = (props: Props) => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-row border bg-white shadow-sm w-full h-[100px] m-2">
        <div className="w-2/5 md:w-1/5 h-full relative block overflow-hidden">
            <Image  src={props.img} alt={'image item'} fill 
            quality={65}
            // sizes='
            // (max-width: 768px) 20vw,
            //   (max-width: 1200px) 10vw,
            //   20vw' 
              className=' object-cover'   />

            {/* <img src={link} alt="test"/> */}
        </div>
        <div className='w-4/5 px-2 py-1'>
            <h3 className='text-md text-[#272727] '>{props.title}</h3>
            <h3 className='text-[#448d4c] font-light'>{props.amount}</h3>
            <h3 className=' font-light'>Quantity : {props.count}</h3>
        </div>
        <div className=' flex flex-col  px-2 py-1'>
        <div
        onClick  ={ ()=>  dispatch(addItem({id : props.id,amount : props.amount,image:props.img,title : props.title}))}

         className='h-1/2 flex items-center text-[#404040]'>
          <PlusCircleIcon className="h-8 w-8  cursor-pointer " /></div>
        <div 
         onClick  ={ ()=>  dispatch(removeItem({id : props.id}))}
        className='h-1/2 flex items-center text-[#404040]'><MinusCircleIcon className="h-8 w-8  cursor-pointer " /></div>
        </div>
    </div>
  )
}

export default CartItem