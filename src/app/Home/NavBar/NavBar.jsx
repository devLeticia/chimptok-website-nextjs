import Image from 'next/image';
import { InstagramLogo, TwitterLogo, MenuIcon, Close} from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import URL from '../../../app/urls.json'

export default function NavBar() {
    function openLogin() {
        window.open('https://app.chimptok.com/', '_blank')
    }
    
    function openSignUp() {
        window.open('https://app.chimptok.com/',  '_blank')
    }
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 700) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fixed z-50 w-full max-w-screen-2xl h-20">
        <div className='mx-10 shadow-sm bg-opacity-90 bg-gray-100 border border-1 border-gray-300 rounded-full flex items-center justify-between px-4 md:px-12 py-3'>
        <div className="flex items-center">
            <div className="text-lg font-bold">
                <Image src="/ChimptokLogotype.svg" alt="ChimptokLogoType" width={140} height={140} className="hover:cursor-pointer" priority />
            </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 md:space-x-12">
            {/* social media links */}
            <div className="flex items-center space-x-4">
                <a href={URL.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                    <InstagramLogo size={24} weight="fill" />
                </a>
                <a href={URL.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                    <TwitterLogo size={24} weight="fill" />
                </a>
            </div>
            <div className="flex items-center space-x-4">
                {/* website links */}
                <a href="#about" className="text-gray-600 hover:text-gray-900 font-bold">
                    About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-bold">
                    Blog
                </a>
            </div>
            <div className="flex items-center space-x-4">
                 <button onClick={openLogin}
                        className={`min-w-40 border-2  ${isScrolled ? 'font-bold bg-gradient-to-r  from-yellow-300 to-yellow-500 hover:from-yellow-200 hover:to-yellow-300 text-zinc-950 border-yellow-400' : 
                                    'bg-zinc-950 border-zinc-950 font-semibold'} hover:bg-zinc-800 text-white  px-4 py-1 rounded focus:outline-none focus:shadow-outline`}
                        >
                    Join
                </button>
                <button onClick={openSignUp} className="min-w-40 border-2 border-zinc-950 bg-white text-gray-950 hover:bg-gray-200 font-semibold px-4 py-1 rounded focus:outline-none focus:shadow-outline">
                    Log In
                </button>
            </div>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        {/* Mobile menu */}
        <div className={`absolute top-16 left-0 w-full rounded-10 bg-gray-100 border border-gray-300 rounded-b-lg shadow-md p-4 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col space-y-4">
                {/* social media links */}
                <div className="flex justify-center space-x-4">
                    <a href={URL.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                        <InstagramLogo size={24} weight="fill" />
                    </a>
                    <a href={URL.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                        <TwitterLogo size={24} weight="fill" />
                    </a>
                </div>
                {/* website links */}
                <a href="#about" className="text-gray-600 hover:text-gray-900 font-bold text-center">
                    About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-bold text-center">
                    Blog
                </a>
                <div className="flex flex-col space-y-4">
                    <button onClick={openLogin} className="w-full border-2 border-zinc-950 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                        Join
                    </button>
                    <button onClick={openSignUp} className="w-full border-2 border-zinc-950 bg-white text-gray-950 hover:bg-gray-200 font-semibold px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                        Log In
                    </button>
                </div>
            </div>
        </div>
        </div>
    </nav>
    
    )
}