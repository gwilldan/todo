import React from 'react'
import { AiOutlineMail} from "react-icons/ai"
import {BiLock} from "react-icons/bi"

function Home() {
  return (
    <div className=' flex flex-col items-center justify-center h-full gap-8'>
        <div className=' text-center'>

            <h1 className=' font-semibold text-2xl mb-2'>Hi, welcome back!</h1>
            <p>
                Sign in now to access your account or Sign up for a new account.
            </p>
        </div>
        
        {/* SIGN IN SECTION */}
        <form className=' flex flex-col gap-6 w-full'>
            {/* Email */}
            <div>
                <h2 className=' font-semibold'>Email</h2>
                <div className=' mt-2 group border-[1.5px] border-blue focus-within:border-blue-700 h-[45px] p-[10px] rounded-xl flex items-center gap-3 text-black-TXT '>
                    <AiOutlineMail className='text-black-border text-3xl' />
                    <input type="email" className=' group: bg-inherit w-full focus:outline-none focus:text-black-BG' placeholder='Enter your email'  />
                </div>
            </div>

            {/* Password */}
            <div className=''>
                <h2 className=' font-semibold'>Password</h2>
                <div className=' mt-2 group border-[1.5px] border-black-border focus-within:border-blue-700 h-[45px] p-[10px] rounded-xl flex items-center gap-3 text-black-TXT '>
                    <BiLock className=' text-black-border text-3xl' />
                    <input type="password" className=' group: bg-inherit w-full focus:outline-none focus:text-black-BG' placeholder='Enter your email' />
                </div>
            </div>

            {/* Remember me && forget password */}
            <div className=' flex items-center justify-between px-2'>
                <div className=' flex items-center gap-2'>
                    <input type="checkbox"  /> Remember me
                </div>
                <a href="#*" className=' text-blue-700 underline'>Forgot password?</a>
            </div>

            {/* sign in  */}
            <button className=' h-10 bg-black-BG text-white-TXT w-full rounded-xl '>Sign up</button>

            <a href="#*" className=' text-blue-700 underline text-sm mt-[-5px]'>Have an account? you can Sign in instead.</a>


        </form>
    </div>
  )
}

export default Home