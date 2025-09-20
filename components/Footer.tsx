import React from 'react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Logo variant="white" />
                        <p className="mt-4 text-gray-400">Your Trusted Partner in Consultancy and Agriculture.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold tracking-wider">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition duration-150">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold tracking-wider">Contact Us</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li><a href="mailto:info@eskada.com" className="hover:text-white">info@eskada.com</a></li>
                            <li><a href="tel:+2348000000000" className="hover:text-white">+234 800 000 0000</a></li>
                            <li>Port Harcourt, Nigeria</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold tracking-wider">Follow Us</h3>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.28 1.545h2.563v8.59H3.725v-8.59zM17.638 2H6.362A4.362 4.362 0 002 6.362v11.276A4.362 4.362 0 006.362 22h11.276A4.362 4.362 0 0022 17.638V6.362A4.362 4.362 0 0017.638 2z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Eskada. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;