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
                    <button className='font-bold text-white rounded-lg sm:pl-3 sm:pr-3 pt-1 pb-1 bg-gradient-to-tr from-[#ff6b6b] to-[#4ecdc4]'>Search</button>
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

            <div className='grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4'>
                {ProductLists.map(item => (
                    <div
                        key={item.id}
                        className='bg-white/10 rounded text-white font-bold p-5'
                    >
                        <img src={item.img} />
                        <div>
                            <h1>{item.productName}</h1>
                            <span>{item.productPrice}</span>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products