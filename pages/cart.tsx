import CartItem from '@/components/CartItem'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '@/reducers/cartReducer'
import { RootState } from './_app'
import Button from '@/components/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const selectCart = useSelector((state:RootState) => state.cart)
  // const itemAmount = useSelector((state:any) => state.cart.totalAmount)
  const [itemArray, setItemArray] = useState<any>([])
  const [localAmount, setLocalAmount] = useState<number>()
  const [localNumber, setLocalNumber] = useState<number>()
  const dispatch = useDispatch()
 
  useEffect(()=>{
    mapCart()
    //get local storage values for quantity and price
    // setLocalAmount( Number(localStorage.getItem('totalAmount') ))
    // setLocalNumber( Number(localStorage.getItem('totalItems') ))
    setLocalAmount( selectCart.totalAmount)
    setLocalNumber( selectCart.totalItems)
  },[selectCart.cartItems])

  const mapCart = () =>{

    var holder = []
    //loop through cart redux state and add rendered item to holder array for display
    for(var i in selectCart.cartItems ){
      console.log("i is ",i );
      console.log("selectCart.cartItems [i] is ",selectCart.cartItems[i].id );
      holder.push( <CartItem key={selectCart.cartItems[i].id} id={selectCart.cartItems[i].id} amount={selectCart.cartItems[i].price} count={selectCart.cartItems[i].count} title={selectCart.cartItems[i].title} img={selectCart.cartItems[i].img}/>)
    }
    //set item array state to updated list of Cart Items
    setItemArray(holder) 

  }

  const clear = () =>{
    //remove all items in cart
    dispatch(clearCart({}))
    // console.log("Selected cart state" + JSON.stringify(selectCart.cartItems));
    // console.log("LOCAL cart: " +localStorage.getItem('cart'))
  }

  const calculateAmt = (a: number) =>{
    return (a * 1.13).toFixed(2);
  }

  const notify = () => {
    toast("Thanks for shopping at ODDIO!");
    toast.success('Purchase Successful !', {
      position: toast.POSITION.TOP_RIGHT
  });
  }

  
  return (
    <div className='px-5 md:px-[10%] pt-[10vh] flex flex-col h-full items-center'>
      <ToastContainer  />
        <h4 className='font-semibold text-2xl py-4'>Cart Items</h4>
        <h4 className='text-sm md:text-base subpixel-antialiased font-light md:font-normal mb-2 '>Total Items: {localNumber}</h4>
        <h4 className='text-sm md:text-base subpixel-antialiased font-light md:font-normal mb-2 '>Total Amount: ${(localAmount?.toFixed(2)) }</h4>

    {itemArray.length > 0  && 
    <>
      <div>
        <button 
          className='font-light text-md border-[1.1px] mr-2 border-black hover:border-gray-500 duration-700 hover:bg-gray-500 hover:text-white rounded-sm p-2' 
          onClick={clear}>
            clear cart
        </button>
        
      </div>
        
        
      <div className='flex flex-row w-full '>
        <div className='w-[70%] md:w-4/5 flex flex-col mt-2 h-[70vh] overflow-y-scroll'>{ itemArray}</div>
        <div className='w-[30%] md:w-1/5 m-2 '> 
            <div className='border shadow-sm bg-slate-50 w-full p-2 m-2'>
              <h3 className='text-base subpixel-antialiased font-normal mb-2 '>Checkout</h3>
              <h3 className='text-sm font-light mb-2 '>cost: ${localAmount?.toFixed(2)}</h3>
              <h3 className='text-sm font-light mb-2 '>tax: ${(0.13 * Number(localAmount)).toFixed(2)}</h3>
              <hr className='border-b-black'/>
              <h3 className='text-sm font-normal my-2 '>total: ${calculateAmt(Number(localAmount))}</h3>
              <button 
                className='font-light text-base border-[1.1px] border-black hover:border-[#519e59] duration-700 hover:bg-[#519e59] hover:text-white rounded-sm p-2' 
                onClick={()=> {notify();clear();}}>
                  pay now
              </button>
              
            </div>
        </div>
      </div>
    </>
    }
    {itemArray.length <= 0 && 

      <div className='px-[10%] flex flex-col h-full items-center justify-center'>
        <h2 className='font-base text-xl py-4'>Cart is empty.</h2>
        <h3>Populate cart in browse page.</h3>
      </div>
    }
    </div>
    
  )
}
export default Cart