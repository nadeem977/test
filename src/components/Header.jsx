import React, { useContext } from 'react'
import { RiMenu3Line } from 'react-icons/ri'
import { AppContext } from '../context/CreateContext'
import profileImg from "../assets/profile.png"
import collImg from "../assets/coll.png"
import { BsBell } from "react-icons/bs";


const Header = () => {


    const { setBarOpen, barOpen } = useContext(AppContext)


    return (
        <>
            <header className='flex items-center justify-between py-2 mb-5 pt-5'>
                {barOpen?<button onClick={() => setBarOpen(!barOpen)}>
                    <RiMenu3Line className='cursor-pointer text-[20px] sm:text-[25px]' />
                </button>:<div></div>}
                <div className='flex items-center gap-3 sm:gap-10'>
                <div className='flex items-center gap-3'>
                <img src={profileImg} alt="profile" className='w-[30px] h-[30px] ms:w-[50px] ms:h-[50px]'/>
                <div>
                    <h1 className='font-bold Inter text-[14px] ms:text-[16px]'>Bella Famina</h1>
                    <p className='text-[#7B7B7B] Inter text-[12px] ms:text-[15px]'>Joined 2 months ago</p>
                </div>
                </div>
                <div className='flex items-center gap-3 ms:gap-5'>
                    <img src={collImg} alt="icon" className='w-[30px] h-[30px]' />
                      <div className='relative cursor-pointer'> 
                        <span className='bg-blue-600 p-1 rounded-full h-fit absolute top-0 right-1'/>
                      <BsBell className='text-[25px]'/>
                      </div>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header