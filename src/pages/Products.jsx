import React from 'react'
import ProductLists from '../components/Products'

const Products = () => {
    return (
        <div className='pt-24 min-h-full pl-5 pr-5 sm:pl-27 sm:pr-27'>
            <h1 className='text-white text-center text-2xl mb-3 sm:text-4xl lg:text-3xl font-bold'>Auto Parts Catalog</h1>

            {/* search bar */}

            <div className='p-2 rounded bg-white/10 backdrop-blur-md mb-17'>
                <div className='flex gap-4  h-fit'>
                    <input className='w-full p-3 text-gray-300 font-bold focus:outline-none bg-white/20 rounded placeholder:text-center placeholder:text-white' placeholder='Search for parts, brands, and vehicle models....' />
                    <button className='font-bold text-white cursor-pointer rounded-lg sm:pl-3 sm:pr-3 pt-1 pb-1 bg-gradient-to-tr from-[#ff6b6b] to-[#4ecdc4]'>Search</button>
                </div>
                <div className='mt-3 flex gap-4 text-white font-bold'>
                    <button className='bg-gradient-to-tr  from-[#ff6b6b] to-[#4ecdc4] rounded-lg cursor-pointer hover:scale-110 transition duration-300 sm:pl-3 sm:pr-3 pt-1 pb-1'>All</button>
                    <button className='bg-gradient-to-tr from-[#ff6b6b] to-[#4ecdc4] rounded-lg cursor-pointer hover:scale-110 transition duration-300 sm:pl-3 sm:pr-3 pt-1 pb-1'>Engine</button>
                    <button className='bg-gradient-to-tr from-[#ff6b6b] to-[#4ecdc4] rounded-lg cursor-pointer  hover:scale-110 transition duration-300 sm:pl-3 sm:pr-3 pt-1 pb-1'>Breaks</button>
                    <button className='bg-gradient-to-tr from-[#ff6b6b] to-[#4ecdc4] rounded-lg  cursor-pointer hover:scale-110 transition duration-300 sm:pl-3 sm:pr-3 pt-1 pb-1'>Transmission</button>
                    <button className='bg-gradient-to-tr from-[#ff6b6b] to-[#4ecdc4] rounded-lg  cursor-pointer hover:scale-110 transition duration-300 sm:pl-3 sm:pr-3 pt-1 pb-1'>Suspension</button>
                    <button className='bg-gradient-to-tr from-[#ff6b6b] to-[#4ecdc4] rounded-lg  cursor-pointer hover:scale-110 transition duration-300 sm:pl-3 sm:pr-3 pt-1 pb-1'>Electrical</button>
                </div>
            </div>

            <div className='grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4 pb-17'>
                {ProductLists.map(item => (
                    <div
                        key={item.id}
                        className='bg-white/10 rounded border-1 border-white/15 text-white font-bold hover:-translate-y-1 hover:scale-103 transition duration-300 hover:shadow-black shadow-2xl'
                    >
                        <div className='flex justify-center'>
                            <span className='text-center p-8 m-8 text-3xl'>{item.img}</span>
                        </div>
                        <div className='bg-white/20 p-4'>
                            <div>
                                <h1 className='text-[17px]'>{item.productName}</h1>
                                <span className='text-2xl text-[#4ecdc4]'>{item.productPrice}</span>
                            </div>
                            <button className='w-full bg-gradient-to-tr from-[#ff6b6b] to-[#4ecdc4] cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition duration-300 rounded-lg pt-2 pb-2 mt-3'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products