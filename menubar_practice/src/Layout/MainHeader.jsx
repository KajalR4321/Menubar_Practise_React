
import React, { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navLinks = ["Home", "Projects", "Services", "About", "Category", "Carrier"];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md text-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="text-2xl font-bold tracking-tight cursor-pointer">
                    <span className="text-blue-400">React</span>Flow
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 font-medium">
                    {navLinks.map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-all duration-300">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-semibold transition-all active:scale-95">
                        Get Started
                    </button>

                    {/* Animated Hamburger Icon */}
                    <div className="md:hidden" onClick={() => setOpen(!open)}>
                        <div className="relative w-8 h-6 cursor-pointer">
                            <span className={`absolute block h-1 w-full bg-white rounded-lg transition-all duration-300 ${open ? 'rotate-45 top-3' : 'top-0'}`}></span>
                            <span className={`absolute block h-1 w-full bg-white rounded-lg transition-all duration-300 top-2.5 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`absolute block h-1 w-full bg-white rounded-lg transition-all duration-300 ${open ? '-rotate-45 top-3' : 'top-5'}`}></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Mobile Menu Drawer */}
            <div className={`absolute top-full left-0 w-full bg-slate-900 overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="flex flex-col space-y-4 px-8 py-8 border-t border-slate-700 ">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg hover:text-blue-400 transition-colors"
                            onClick={() => setOpen(false)} // Close menu on click
                        >
                            {item}
                        </a>
                    ))}
                    <button className="w-full bg-blue-600 py-3 rounded-lg font-bold">Get Started</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;