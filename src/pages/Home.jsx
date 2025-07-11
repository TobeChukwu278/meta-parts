import React from 'react'
import Hero from '../components/Hero'

const featuresCard = [
    {
        img: '🔧',
        heading: 'Vast Inventory',
        description: 'Over 1 million auto parts from thousands of manufacturers, all accessible in our virtualshowroom.'
    },
    {
        img: '🥽',
        heading: 'AR/VR Experience',
        description: 'Visualize parts in 3D, see how they fit your vehicle, and interact with them in virtual reality.'
    },
    {
        img: '🚀',
        heading: 'Instant Delivery',
        description: 'Virtual parts available instantly, physical parts delivered within 24 hours to your location.'
    },
    {
        img: '🛡️',
        heading: 'Quality Guaranteed',
        description: 'All parts verified through blockchain technology with authenticity certificates.'
    }
]

const Home = () => {
    return (
        <div>
            <Hero />

            {/* Features: why choose us */}
            <div className='flex justify-center sm:mx-25 py-15 max-w-fit'>
                <div className='features items-center'>
                    <h1 className='text-white text-balance text-center text-4xl font-bold mb-10'>Why Choose MetaParts?</h1>
                    <div className='flex flex-col justify-center items-center sm:flex-row sm:flex-wrap gap-17 mx-2.5'>{
                        featuresCard.map((item) => (
                            <div key={item.index} className='bg-white/10 p-4 border-1 border-white/15 rounded-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 max-w-[300px]'>
                                <div className='flex flex-col justify-center align-middle text-center'>
                                    <h1 className='mb-[20px] text-3xl'>{item.img}</h1>
                                    <div>
                                        <h3 className='text-2xl text-white mb-5'>{item.heading}</h3>
                                        <p className='text-white'>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }</div>
                </div>
            </div>
        </div>
    )
}

export default Home