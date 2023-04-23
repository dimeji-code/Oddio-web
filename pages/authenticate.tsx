import Button from '@/components/Button'
import React, { useState } from 'react'

const Authenticate = () => {
    const [login,setLogin] = useState<boolean>(true)

  return (
    <div className='px-[10%] pt-[10vh] flex flex-col h-full items-center'>
       { login && <form action="">
            <h4 className='text-3xl font-semibold mb-5'>Login</h4>

            <label htmlFor="username">Username</label>
            <input className='block border duration-700 outline-none focus:border-b-black' type="text" />

            <label htmlFor="username">Password</label>
            <input className='block mb-5 border duration-700 outline-none focus:border-b-black' type="text" />
            <p onClick={()=>{setLogin(!login)}} className='hover:text-blue-600 duration-500 hover:cursor-pointer text-[#2c2c2c] mb-5 font-light text-base'>Don&apos;t have an account? Sign Up.</p>
            
            <div className='flex'>
                <Button text="submit" />
            </div> 
        </form>
        }
        {
            !login &&
            <form action="">
            <h4 className='text-3xl font-semibold mb-5'>Register</h4>

            <label htmlFor="username">Username</label>
            <input className='block border duration-700 outline-none focus:border-b-black' type="text" />

            <label htmlFor="username">Password</label>
            <input className='block  border duration-700 outline-none focus:border-b-black' type="text" />

            <label htmlFor="username">Confirm Password</label>
            <input className='block mb-5 border duration-700 outline-none focus:border-b-black' type="text" />

            <p onClick={()=>{setLogin(!login)}} className='hover:text-blue-600 duration-500 hover:cursor-pointer text-[#2c2c2c] mb-5 font-light text-base'>Have an account? Log In.</p>
            
            <div className='flex'>
                <Button text="submit" />
            </div> 
        </form>
        
        }

    </div>
  )
}

export default Authenticate