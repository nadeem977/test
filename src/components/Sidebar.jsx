import React, { useContext } from 'react'
import { sidebardata } from '../assets/data'
import { LogoIcon } from '../assets/Icons'
import { RiMenu3Line } from "react-icons/ri";
import { AppContext } from '../context/CreateContext';


const Sidebar = () => {

    const { barOpen, setBarOpen } = useContext(AppContext)


    return (
        <>
            <section>
                <div className={`transition-all duration-300 ${barOpen ? 'min-w-[0]' : 'ml:min-w-[280px]'} h-screen`}>
                    <div className={`min-w-[280px] max-w-[300px] bg-white
                         overflow-y-auto fixed top-0 z-50 transition-all duration-300 ${barOpen ? '-left-[300px]' : "left-0"} h-screen p-4`}>
                        <div className='flex items-center justify-between gap-2 w-full'>
                            <div className='flex items-center gap-2 px-5 '>
                                <sapn className='logo_span'>
                                    <LogoIcon />
                                </sapn>
                                <h1 className='text-[#5679FF] font-bold text-[20px]'>NSTYLE</h1>
                            </div>
                            <button onClick={() => setBarOpen(!barOpen)}>
                                <RiMenu3Line className='cursor-pointer text-[25px]' />
                            </button>
                        </div>
                        <div className='flex flex-col gap-3 w-full my-5'>
                            {sidebardata?.map((item, i) => (
                                <button key={i}
                                    className='p-2 px-5 svg text-[16px] w-full rounded-lg flex items-start hover:text-white gap-5 hover:bg-[#101928]'>
                                    <span className='w-[20px] '>{item?.icon}</span>
                                    {item?.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sidebar