import React from 'react'

const Container = ({children}) => {
  return (
    <main className='flex w-full min-h-screen overflow-hidden'>
        {children}
    </main>
  )
}

export default Container;