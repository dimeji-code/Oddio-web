import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import {  XMarkIcon,ShoppingCartIcon } from '@heroicons/react/24/solid'
import Image, { ImageLoader } from 'next/image'
import { CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux'
import { addItem } from '@/reducers/cartReducer';

type Props = {
    id:string,
    img:string,
    title:string,
    tags:string[],
    price:number
}

const DetailedItem = (props: Props) => {
    const [hide, setHide] = useState(false);

    const dispatch = useDispatch()

    const addToCart = (id:string,amt:number,image:string, title:string) => {
        dispatch(addItem({id : id,amount : amt,image:image,title : title}))
 
   }
     
  return (
    <div  className={` ${hide==true?"hidden":"absolute"} top-0 z-[100] duration:1000  left-0 w-full h-full bg-[#25294646] flex justify-center items-center`}>
        <div className='bg-white w-[70%] h-[70%] rounded-md shadow-md overflow-hidden flex flex-col'>

           <div className='w-full h-4/5 flex border-b-slate-400 border-b-[0.5px] shadow-sm'>

                <div className='flex w-2/5 shadow-sm relative justify-center items-center'>
                    {/* <img src={props.img} alt="img" /> */}
                    {/* {!isLoading &&  loadImage} */}
                    <Image  src={props.img} alt={'image item'} fill quality={60} className=' object-cover'   />
                </div> 
                <div className='w-3/5 flex flex-col justify-center items-center'>

                    <h3 className='font-semibold text-xl'>{props.title}</h3>
                    <h4 className='font-light text-lg text-[#5f9360]'>${props.price}</h4>
                    <div onClick={() =>{addToCart(props.id, props.price,props.img,props.title)}} className=" border rounded-lg bg-slate-50 p-1 "><ShoppingCartIcon className="h-6 w-6  cursor-pointer hover:text-red-400 duration-700  "  /></div>

                </div>
                <XMarkIcon className="h-9 w-9 relative  hover:cursor-pointer" onClick={()=>{setHide(true)}} />


            </div>
                <div className="w-full h-2/5 flex justify-center items-center p-5 ">
                <Grid container spacing={0.5} > 

                {props.tags.map((item:string) => 
                    <h4 key={item} className='bg-[#3a4242d4] text-center p-3 shadow-md rounded-full  inline-block text-white text-sm font-light mx-1 md:font-normal'>#{item}</h4>
                ) 
                }
                </Grid>
                </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default DetailedItem