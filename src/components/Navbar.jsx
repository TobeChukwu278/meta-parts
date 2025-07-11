import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='bg-black/20 backdrop-blur-md flex justify-between items-center px-4 py-2 fixed top-0 w-full z-10'>

                <h1 className='text-4xl font-bold bg-gradient-to-tr from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent'>MetaParts</h1>

                <ul className='flex text-[16px] font-semibold text-white gap-4'>
                    {/* <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}> */}
                    <li>
                        <NavLink to='/' className={({ isActive }) =>
                            `nav-link-hover-gradient ${isActive ? "active" : ""}`
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' className={({ isActive }) =>
                            `nav-link-hover-gradient ${isActive ? "active" : ""}`
                        }>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/arview' className={({ isActive }) =>
                            `nav-link-hover-gradient ${isActive ? "active" : ""}`
                        }>AR View</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' className={({ isActive }) =>
                            `nav-link-hover-gradient ${isActive ? "active" : ""}`
                        }>Profile</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar