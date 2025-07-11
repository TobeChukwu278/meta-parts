import React from 'react'

const Hero = () => {
    return (
        <div className='py-20'>
            <div className="bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] text-center py-[100px] mx-auto px-auto">
                <h1 className='text-3xl sm:text-4xl md:text-8xl lg:text-10xl text-white font-bold mb-5 transition-all animate-bounce delay-2000'>Welcome To Metaparts</h1>
                <p className='sm:text-2xl text-white font-semibold'>Experience spare parts shopping in the metaverse.</p>


                <div className='m-4 text-white font-bold'>
                    <button className='my-5 mx-5 bg-gradient-to-tr from-[#ff6b6b] to-[#4ecdc4] px-5 py-2.5 rounded-3xl cursor-pointer text-xl animate-pulse transition-all hover:-translate-y-1 hover:shadow-2xl'>Browse Parts</button>
                    <button className='my-5 mx-5 border-2 px-5 py-2 rounded-3xl cursor-pointer text-xl transition-text animate-pulse delay-2000 hover:-translate-y-1 hover:shadow-2xl'>View AR</button>
                </div>
            </div>
        </div>
    )
}

export default Hero