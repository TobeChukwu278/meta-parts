import React from 'react'
import Arfeatures from '../components/ARFeatures'

const ARView = () => {
    return (
        <div className='py-22 px-20'>
            <h1 className='text-white font-bold text-3xl text-center'>AR Part Viewer</h1>
            <p className='text-white font-bold text-center text-[18px] my-4'>Experience parts in augmented reality before you buy</p>

            {/* ar viewer */}
            <div className='flex justify-center flex-col h-[500px] w-full text-center text-white text-bold rounded-[16px] bg-gradient-to-br from-[#4ecdc4] to-[#44a08d]'>
                <span className='text-7xl mb-2'>🥽</span>
                <h1 className='text-2xl'>AR Viewer Active</h1>
                <p>Point your device at your vehicle to see how parts fit.</p>
                <span className='loader-anim-path mt-5'>
                    <span className='loader-anim '></span>
                </span>

            </div>



            {/* ar controls */}

            <div className='flex justify-center gap-3 mt-5 py-3 text-white'>
                <button className='bg-white/20 py-1.5 px-3 rounded-3xl cursor-pointer hover:scale-105 hover:bg-white/30 transition-all duration-300'> 📱 Enable Camera</button>
                <button className='bg-white/20 py-1.5 px-3 rounded-3xl cursor-pointer hover:scale-105 hover:bg-white/30 transition-all duration-300'> 🔄 Rotate Part</button>
                <button className='bg-white/20 py-1.5 px-3 rounded-3xl cursor-pointer hover:scale-105 hover:bg-white/30 transition-all duration-300'> 📏 Measure</button>
                <button className='bg-white/20 py-1.5 px-3 rounded-3xl cursor-pointer hover:scale-105 hover:bg-white/30 transition-all duration-300'> 💾 Save View</button>
            </div>


            {/* ar features */}
            <div className='mt-9 '>

                <h1 className='text-white text-2xl font-bold'>AR Features</h1>
                <div className='flex justify-center gap-6 mt-10'>
                    {Arfeatures.map((item) =>
                    (<div >
                        <div className='bg-white/20 rounded-lg py-5 px-3 text-white text-center transition duration-300 hover:bg-30 hover:-translate-y-1 hover:shadow-black shadow-2xl cursor-pointer'>
                            <span className='text-6xl mb-5'>{item.icon}</span>
                            <h3 className='bold text-2xl my-3'>{item.name}</h3>
                            <p className='bold'>{item.description}</p>
                        </div>
                    </div>)
                    )}
                </div>
            </div>
        </div>
    )
}

export default ARView