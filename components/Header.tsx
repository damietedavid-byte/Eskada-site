import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-700 font-medium transition duration-150 ease-in-out">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                         <div className="relative">
                            <input type="text" placeholder="Search..." className="bg-gray-100 rounded-full py-2 px-4 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-700 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                     <div className="p-4">
                         <input type="text" placeholder="Search..." className="bg-gray-100 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;