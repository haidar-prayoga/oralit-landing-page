// Navbar.js
import React from 'react';
import Dropdown from './Dropdown';

const Navbar = ({ className }) => {
    return (
        <nav className={`bg-gray-900 p-4 ${className} shadow-md shadow-gray-500`}>
            <div className="mx-2 flex justify-between items-center relative">
                {/* Logo */}
                <div className="text-white text-2xl poppins-semibold">
                    Ora<span className='text-green-500'>lit</span>
                </div>
                {/* Dropdown */}
                <div className='right-0'>
                    <Dropdown />
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
