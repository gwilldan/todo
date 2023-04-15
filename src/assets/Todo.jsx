import React from 'react'
import {FiMenu, FiSearch} from "react-icons/fi"

import photo from "../images/lance (1).png"

function Todo() {
  return (
    <div className=''>

        {/* NAV BAR */}
        <div className=' flex items-center gap-4 px-2 py-3'>
            <button>
                <FiMenu className=' text-2xl' />
            </button>
            <h1 className=' font-bold text-lg'>Penguin</h1>
            <div className=' focus-within:border-blue-700 border-2 border-black-TXT flex items-center rounded-lg p-1 gap-2 w-[50%]'>
                <FiSearch />
                <input type="text" className=' bg-inherit focus:outline-none w-full' />
            </div>
            <div className=' w-8 rounded-full border-3 border-black-BG'>
                <img src={photo} className=" rounded-full "/>
            </div>
        </div>


        {/* profile section */}
        <div className=' flex flex-col justify-center items-center p-4 mt-4 gap-4'>
            <img src={photo} className="w-[120px] rounded-full" />
            <h3>@greenwood.msn</h3>
            <h1 className=' text-xl font-semibold'>Manson Greenwood</h1>

            <h3 className=' py-2'>Your activity today</h3>

            <h1 className=' text-6xl font-semibold'>77%</h1>
        </div>
        

    </div>
  )
}

export default Todo