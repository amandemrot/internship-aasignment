import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-20">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Aman’s Internship Project. All rights reserved.</p>
                <div className="mt-3 md:mt-0 flex space-x-4">
                    <a href="#hero" className="hover:text-indigo-400 text-sm">Home</a>
                    <a href="#products" className="hover:text-indigo-400 text-sm">Products</a>
                    <a href="#faq" className="hover:text-indigo-400 text-sm">FAQ</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
