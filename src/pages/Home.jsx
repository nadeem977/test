import React from 'react'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container' 
import Header from '../components/Header'
import { RiCalendar2Line } from 'react-icons/ri'
import { appointmentData, ProductData, SalseUpdate } from '../assets/data'
import CustomBarChart from '../components/CustomBarChart'
import Calender from '../components/Calender'
import { BsPerson } from 'react-icons/bs'
import { TeamMembers } from '../assets/data'
import TopTeam from '../components/TopTeam'
import Tables from '../components/Tables'

const Home = () => { 

  return (
    <>
      <Container>
        <Sidebar />
        <section className='px-4 w-full'>
          <Header />
          <div className='flex items-center justify-between gap-2 mt-10 flex-col md:flex-row'>
            <h1 className='text-[29px] Inter text-center md:text-left'><span className='text-[#3F3F44]'>Good Morning,</span> <span className='font-bold'>Bella Famina</span> </h1>
            <button className='flex items-center justify-around text-[20px] ga-2 bg-[#101928] text-white rounded-lg px-4 w-[260px] h-[58px] '>
              <RiCalendar2Line/>
            New Appointment
            </button>
          </div>
          <div className='grid ml:grid-cols-3 gap-5 my-10'>
            {SalseUpdate?.map((item,i)=>(
              <div key={i} className='cardshadow h-[146px] p-5 rounded-lg flex flex-col justify-between gap-2'>
              <div className='flex items-center text-[30px] font-semibold justify-between gap-2 Inter'>
               <span>{item?.icon}</span>
                <span className={`${i===2?'text-[#F52525]':'text-[#007930]'}`}>{item?.rate}</span>
              </div>
              <div className='flex items-center  text-[20px] font-semibold justify-between gap-2 Inter'>
               <p>{item?.title}</p>
               <img src={item?.GPH} alt="graph"  />
              </div>
           </div>
            ))}
          </div>
         <div className='py-5'>
         <CustomBarChart/>
         </div>
         <div className='grid lg:grid-cols-2 gap-10 my-10 items-center'>
          <Calender/>
          <div>
            <h1 className='text-[25px] font-semibold mb-5 text-[#3F3F44]'>Today's Appointments</h1>
            <div className='grid grid-cols-1 gap-3'>
              {appointmentData?.map((item,i)=>(
                <div key={i} className='p-4 rounded-xl bg-[#101928] text-[white] w-full h-fit'>
                   <div className='flex items-center gap-3'>
                    <img src={item?.img} alt="image" className='w-[80px] rounded-lg'/>
                   <div className='flex justify-between w-full'>
                   <div className='flex flex-col gap- items-start'>
                      <p className=''>{item?.time}</p>
                      <h1 className='font-semibold text-[17px]'>{item?.title}</h1>
                      <p className='flex items-center gap-2'><BsPerson/> {item?.name}</p>
                    </div>
                    <div className='flex flex-col justify-between gap-2 items-end'>
                      <p>{item?.month}</p>
                      <h1>{item?.date}</h1>
                    </div>
                   </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
         </div>
         <div className='grid md:grid-cols-2 gap-5 my-10 '>
         <div className='p-5 rounded-xl boxshado'>
         <div className='flex items-center justify-between gap-1'>
         <h1 className='text-[#3F3F44] text-[20px] font-bold'>Top Products</h1>
          <select className="mr-2 outline-0 border-none w-fit cursor-pointer text-[#3F3F44] ">
          <option>This Month</option>
          <option value="2">Last Month</option>
        </select>
         </div>
         <TopTeam data={ProductData}/>
         </div>
         <div className='p-5 rounded-xl boxshado'>
         <div className='flex items-center justify-between gap-1'>
         <h1 className='text-[#3F3F44] text-[20px] font-bold'>Top Team Members</h1>
          <select className="mr-2 outline-0 border-none w-fit cursor-pointer text-[#3F3F44] ">
          <option>This Month</option>
          <option value="2">Last Month</option>
        </select>
         </div>
         <TopTeam data={TeamMembers}/>
         </div>
         </div>
        <Tables/>
        </section>
      </Container>
    </>
  )
}

export default Home