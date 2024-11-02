// Navbar.js
import React from 'react';

const Navbar = ({ className }) => {
    return (
        <nav className={`bg-gray-900 p-4 ${className} shadow-md shadow-gray-500`}>
            <div className="container mx-2 flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl poppins-semibold">
                    Ora<span className='text-green-500'>lit</span>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
