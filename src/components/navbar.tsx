import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white hover:text-white ">
                            Bird Vision
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className="text-white hover:bg-white-700  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Product
                            </Link>
                            <Link to="/" className="text-white hover:bg-white-700  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                About
                            </Link>
                            <Link to="/" className="text-white hover:bg-white-700  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Contact
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
