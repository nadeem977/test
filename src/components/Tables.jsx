import React from 'react';
import { TableData } from '../assets/data';


const Tables = () => {



    return (
        <>
            <div className='my-10 boxshado p-5 rounded-xl '>
                <h1 className='text-[23px] md:text-[30px] text-[#3F3F44] my-3 font-semibold'>Recent Appointments</h1>
                <div className=' overflow-x-auto'>
                <table className="table-auto w-full min-w-[500px]">
                    <thead className="bg-[#F6F6F6]">
                        <tr>
                            <th className="w-[150px] pr-[4rem] text-[#3F3F44]  p-2 rounded-tl-xl rounded-bl-xl font-[400]">Service</th>
                            <th className="p-2 text-[#3F3F44] font-[400]">Employee</th>
                            <th className="p-2 text-[#3F3F44] font-[400]">Sale</th>
                            <th className="p-2 text-[#3F3F44] rounded-tr-xl rounded-br-xl font-[400]">Earnings</th>
                        </tr>
                    </thead>

                    <tbody>
                        {TableData?.map((item, index) => (
                            <tr key={index} className="text-center h-[75px]">
                                <td className="border-b p-3 w-[200px] pl-10">
                                    <div className="flex items-start justify-start gap-2">
                                        <img src={item.service.img} alt="service" className="w-10 h-10" />
                                        <div className='flex flex-col items-start'>
                                            <h1 className="font-[500] ">{item.service.name}</h1>
                                            <p className="text-sm text-[#3F3F44]">{item.service.date}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-b h-[75px]  p-3">{item.Employee}</td>
                                <td className="border-b h-[75px]  p-3">{item.Sale}</td>
                                <td className="border-b h-[75px] p-3">{item.Earnings}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}

export default Tables