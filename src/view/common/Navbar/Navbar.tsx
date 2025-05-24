import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/8_1sasa11.png";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 z-50 bg-[#151515]/95 backdrop-blur-md py-4 px-8 border-b border-white/10">
            <div className="max-w-[98vw] mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-[70px] h-auto" />
                    <span className="text-white no-underline text-xl font-bold bg-gradient-to-r from-[#00ff88] to-[#00cc6a] bg-clip-text text-transparent">
                        Organic Shop
                    </span>
                </div>

                {/* Navigation Links */}
                <div className={`md:flex items-center gap-8 ${isMenuOpen ? 'fixed md:static top-[70px] right-0 flex flex-col bg-[#151515]/95 w-full py-8 transition-all duration-300' : 'fixed md:static top-[70px] -right-full md:right-0 flex flex-col md:flex-row bg-[#151515]/95 w-full md:w-auto py-8 md:py-0 transition-all duration-300'}`}>
                    <li className="list-none">
                        <Link
                            to="/"
                            className="text-white font-medium relative py-2 block hover:text-[#00ff88] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00ff88] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link
                            to="/about"
                            className="text-white font-medium relative py-2 block hover:text-[#00ff88] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00ff88] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            About
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link
                            to="/contact"
                            className="text-white font-medium relative py-2 block hover:text-[#00ff88] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00ff88] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Contact
                        </Link>
                    </li>
                </div>

                {/* CTA Button - Hidden on mobile */}
                <Link
                    to="/login"
                    className="hidden md:block bg-[#00ff88] text-[#151515] py-2 px-6 rounded font-semibold hover:bg-[#00cc6a] hover:-translate-y-[2px] transition-all duration-300"
                >
                    Sign in
                </Link>

                {/* Hamburger Menu */}
                <div
                    className="md:hidden flex flex-col gap-1 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
                    <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
}

/**
 * @author supunmadhuranga
 * @created 2025-05-10
 * @project vite1
 */