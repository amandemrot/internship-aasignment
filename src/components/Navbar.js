import React from 'react';
import { FaUserTie } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-4 sm:px-6 py-3">
            {/* Logo pinned left */}
            <div className="flex items-center space-x-2 text-xl font-bold text-blue-700">
                <FaUserTie className="text-blue-700" />
                <span>MyInternship</span>
            </div>

            {/* Navigation Links — visible on all devices */}
            <div className="space-x-6 flex">
                <a href="#hero" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition">Products</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium transition">FAQ</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
