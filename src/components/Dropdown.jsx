import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BurgerDropdown = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Burger Button */}
            <button
                onClick={toggleMenu}
                className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
                aria-label="Toggle menu"
            >
                <span
                    className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                ></span>
                <span
                    className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''
                        }`}
                ></span>
                <span
                    className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                ></span>
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 ${isOpen
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                    }`}
            >
                <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-[100%]"
                    onClick={() => navigate('/')}
                >
                    Beranda
                </button>
                <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-[100%]"
                    onClick={() => navigate('/materi')}
                >
                    Materi
                </button>
            </div>
        </div>
    );
};

export default BurgerDropdown;