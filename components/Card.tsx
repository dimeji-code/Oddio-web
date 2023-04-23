import React, { useEffect } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '@/reducers/cartReducer'

type Props = {
    img: string,
    title: string,
    price: number,
    tags: string[],
    id: string,
}

const Card = (props: Props) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state:any) => state.cart.cartItems)

  useEffect(()=>{
    //  localStorage.setItem('cart', JSON.stringify(cartItems))
     console.log("LOCAL STORAGE SAYS: " + localStorage.getItem('cart') )

  },[cartItems])

  const addToCart = (id:string,amt:number,image:string, title:string) => {
       dispatch(addItem({id : id,amount : amt,image:image,title : title}))

  }

  return (
    <div className="object-cover ">
      <div className='hover:scale-105 duration-700 hover:cursor-pointer bg-white '> 
        <div className='w-full  relative block '>
          <Image className=' duration-700'  src={props.img} alt={'image item'} style={{objectFit: 'cover'}} width={400} height={100} />
        </div> 
        <div className='flex flex-row justify-between'>
            <h4 className=''>{props.title}</h4>
            <h4 className='text-[#5f9360]'>${props.price}</h4>
        </div>
        <h3 className=" flex ">  
        <div onClick={() =>{addToCart(props.id, props.price,props.img,props.title)}} className=" border rounded-lg bg-slate-50 p-1 "><ShoppingCartIcon className="h-6 w-6  cursor-pointer hover:text-red-400 duration-700  "  /></div>
        </h3>

      </div>
        
    </div>
  )
}

export default Card