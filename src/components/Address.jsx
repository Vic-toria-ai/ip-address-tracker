import React from 'react'

function Address() {
  return (
    <div>
        <section className='relative uppercase p-8 bg-white rounded-lg mx-8 shadow-md grid grid-cols-1 md:grid-cols-4 text-center md:text-start gap-4 md:max-w-4xl md:mx-auto -mb-60 md:-mb-15' style={{zIndex: "500"}}>
            <div className='md:border-r md:border-gray-400'>
                <h1 className='font-semibold text-gray-700 tracking-wider mb-2'>IP Address</h1>
                <p className='font-bold text-gray-800 text-lg'>192.212.174.101</p>
            </div>

            <div className='md:border-r md:border-gray-400'>
                <h1 className='font-semibold text-gray-700 tracking-wider mb-2'>location</h1>
                <p className='font-bold text-gray-800 text-lg'>Brooklyn, NY</p>
            </div>

            <div className='md:border-r md:border-gray-400'>
                <h1 className='font-semibold text-gray-700 tracking-wider mb-2'>timezone</h1>
                <p className='font-bold text-gray-800 text-lg'>utc -05:00</p>
            </div>

            <div>
                <h1 className='font-semibold text-gray-700 tracking-wider mb-2'>isp</h1>
                <p className='font-bold text-gray-800 text-lg'>spacex starlink</p>
            </div>
            
        </section>
    </div>
  )
}

export default Address