import React from 'react'

//icons
import {FiMenu, FiSearch} from "react-icons/fi"
import {RiTodoLine} from 'react-icons/ri'
import {BsThreeDots} from "react-icons/bs"
import {HiOutlineRectangleGroup} from "react-icons/hi2"
import {FaLink} from "react-icons/fa"

import photo from "../images/lance (1).png"

function Todo() {
  return (
    <div className=''>

        {/* NAV BAR */}
        <div className='sticky w-full top-0 flex items-center gap-4 px-2 py-3 bg-white-BG'>
            <button>
                <FiMenu className=' text-2xl' />
            </button>
            <h1 className=' font-bold text-lg'>Penguin</h1>
            <div className=' focus-within:border-blue-700 border border-black-TXT flex items-center justi rounded-2xl p-1 gap-2 w-[50%] px-2'>
                <FiSearch />
                <input type="text" className=' bg-inherit focus:outline-none w-[80%]' />
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

        {/* Task To-do */}
        <div className=' px-6 mt-4 mb-10'>
            <div className=' bg-yellowBG px-4 rounded-t-2xl h-[60px] flex items-center gap-4'>
                <div>
                    <RiTodoLine className=' text-4xl' />
                </div>
                <div>
                    <h1 className=' font-semibold text-base'>To-Do</h1>
                    <h2 className=' py-[1px] text-sm'>Last Update 7 Jan, 12:20pm</h2>
                </div>
            </div>

            <div className=' px-2 flex items-center justify-between h-[50px]'>
                <div className=' flex items-center gap-2'>
                    <HiOutlineRectangleGroup className=' text-yellowBG font-bold text-xl '/>
                    <h2 className=' text-sm'>2 Tasks</h2>
                </div>
                <button>
                    <BsThreeDots  className=' text-2xl'/>
                </button>
            </div>

            {/* list of Tasks */}
            <div >
                <div className=' bg-yellowBG mx-2 text-sm px-4 py-2 flex flex-col justify-between'>
                    <div className=' mb-6'>
                        <h1 className=' font-semibold font-base mb-2'>Landing page</h1> 
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                    </div>

                    <div className=' flex justify-between items-center'>
                        <div>
                            +
                        </div>
                        <div className=' flex items-center gap-2'>
                            <FaLink />
                            <h2>1</h2>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>

        {/* Task In progress */}
        <div className=' px-6 mt-4'>
            <div className=' bg-blueBG px-4 rounded-t-2xl h-[60px] flex items-center gap-4'>
                <div>
                    <RiTodoLine className=' text-4xl' />
                </div>
                <div>
                    <h1 className=' font-semibold text-base'>In progress</h1>
                    <h2 className=' py-[1px] text-sm'>Last Update 7 Jan, 12:20pm</h2>
                </div>
            </div>

            <div className=' px-2 flex items-center justify-between h-[50px]'>
                <div className=' flex items-center gap-2'>
                    <HiOutlineRectangleGroup className=' text-blueBG font-bold text-xl '/>
                    <h2 className=' text-sm'>2 Tasks</h2>
                </div>
                <button>
                    <BsThreeDots  className=' text-2xl'/>
                </button>
            </div>

            {/* list of Tasks */}
            <div >
                <div className=' bg-blueBG mx-2 text-sm px-4 py-2 flex flex-col justify-between mb-6'>
                    <div className=' mb-6'>
                        <h1 className=' font-semibold font-base mb-2'>Landing page</h1> 
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                    </div>

                    <div className=' flex justify-between items-center'>
                        <div>
                            +
                        </div>
                        <div className=' flex items-center gap-2'>
                            <FaLink />
                            <h2>1</h2>
                        </div>
                    </div>
                </div>

                <div className=' bg-blueBG mx-2 text-sm px-4 py-2 flex flex-col justify-between mb-6'>
                    <div className=' mb-6'>
                        <h1 className=' font-semibold font-base mb-2'>Landing page</h1> 
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                    </div>

                    <div className=' flex justify-between items-center'>
                        <div>
                            +
                        </div>
                        <div className=' flex items-center gap-2'>
                            <FaLink />
                            <h2>1</h2>
                        </div>
                    </div>
                </div>

                <div className=' bg-blueBG mx-2 text-sm px-4 py-2 flex flex-col justify-between mb-6'>
                    <div className=' mb-6'>
                        <h1 className=' font-semibold font-base mb-2'>Landing page</h1> 
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                        <button className=' flex items-center gap-2'> <div className=' bg-black-BG w-1 h-1 rounded-full'></div> Draw </button>
                    </div>

                    <div className=' flex justify-between items-center'>
                        <div>
                            +
                        </div>
                        <div className=' flex items-center gap-2'>
                            <FaLink />
                            <h2>1</h2>
                        </div>
                    </div>
                </div>
            </div>
            
            

        </div>

         
        

    </div>
  )
}

export default Todo