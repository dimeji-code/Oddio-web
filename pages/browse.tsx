import Card from '@/components/Card'
import React, { useEffect, useState } from 'react'
import { Items } from '@/data/data'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '@/reducers/cartReducer'
import DetailedItem from '@/components/DetailedItem'

const Browse = () => {
    const [sort,setSort] =  useState("default")
    const selectCart = useSelector((state:any) => state.cart)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        setSort("default")
        console.log("cart items state initial:" + selectCart?.cartItems );

    },[])

    return (
    <div className='px-[10%] pt-[10vh] h-[100vh]  flex flex-row'>
        {/* <div className='flex flex-col'>
            <div>{selectCart.totalAmount }</div>
            <div>{selectCart.totalItems }</div>
            <button onClick={()=>{  
                dispatch(clearCart({}))     
                }}>
                    Clear local
                </button>
        </div>  */}
         <div className="w-2/5 md:w-1/4 sticky ">
                <h4 className='text-md mt-8'>Sort by :</h4>
                <div className="flex flex-row items-center my-4 md:my-2">
                    <input onClick={()=>{setSort("htl")}} className="form-check-input mr-4 " type="radio" name={'sort'} id={"1"}  color="#fff"/>
                    <label className="text-sm md:text-base" htmlFor='1'>
                        Highest to Lowest
                    </label>
                </div>
                <div className="flex flex-row items-center my-4 md:my-2">
                    <input onClick={()=>{setSort("lth")}} className="form-check-input mr-4 " type="radio" name={'sort'} id="2"  color="#fff"/>
                    <label className="text-sm md:text-base" htmlFor='2' >
                        Lowest to Highest
                    </label>
                </div>
                <div className="flex flex-row items-center my-4 md:my-2">
                    <input onClick={()=>{setSort("hp")}} className="form-check-input mr-4 " type="radio" name={'sort'} id="3"  color="#fff"/>
                    <label className="text-sm md:text-base" htmlFor='3' >
                        Headphones
                    </label>
                </div>
                <div className="flex flex-row items-center my-4 md:my-2">
                    <input onClick={()=>{setSort("s")}} className="form-check-input mr-4 " type="radio" name={'sort'} id="4"  color="#fff"/>
                    <label className="text-sm md:text-base" htmlFor='4' >
                        Speakers
                    </label>
                </div>


            </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-2 overflow-y-scroll gap-4 w-3/5 md:w-3/4">
        { sort == "default" &&
        Items.map(item => 
            <Card img={item.imgUrl} title={item.title} price={item.price} tags={item.tags} key={item.id} id={item.id} />
        )}
        { sort == "htl" && 
        Items.sort((lowest,highest) => highest.price - lowest.price) 
        .map(item => 
            <Card img={item.imgUrl} title={item.title} price={item.price} tags={item.tags} key={item.id} id={item.id} />
        )}
        { sort == "lth" && 
        Items.sort((lowest,highest) => lowest.price - highest.price) 
        .map(item => 
            <Card img={item.imgUrl} title={item.title} price={item.price} tags={item.tags} key={item.id} id={item.id} />
        )}
        { sort == "hp" && 
        Items.filter((items) => items.tags.includes("Headphones")) 
        .map(item => 
            <Card img={item.imgUrl} title={item.title} price={item.price} tags={item.tags} key={item.id} id={item.id} />
        )}
        { sort == "s" && 
        Items.filter((items) => items.tags.includes("Speaker")) 
        .map(item => 
            <Card img={item.imgUrl} title={item.title} price={item.price} tags={item.tags} key={item.id} id={item.id} />
        )}

        </div>
        
    </div>
  )
}

export default Browse