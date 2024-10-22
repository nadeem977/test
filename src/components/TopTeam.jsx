import React from 'react'



const TopTeam = ({ data }) => {

    return (
        <>
            <div className='gerid grid-cols-1 gap-3'>
                {data?.map((item, i) => (
                    <div key={i} className='border-b py-4 flex items-center gap-2'>
                        <img src={item?.img} alt="image" />
                        <span>
                            <h1 className='text-[18px] font-semibold'>{item?.name}</h1>
                            <p className='text-[#3F3F44]'>{item?.book}</p>
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TopTeam