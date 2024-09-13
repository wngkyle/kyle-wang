import { useState } from 'react';
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -45;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
            
            setIsMobileMenuOpen(false);
        }
    }

    return (
        <div>
            <nav className="fixed left-5 right-0 top-7 z-50">
                {/* Desktop Menu */}
                <div className="hidden max-w-xl items-center justify-center rounded-lg 
                border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex ml-5">
                    <div className="flex items-center justify-between gap-6">
                        <div>
                            <a href="#">
                                {/* <img src={logo} width={150} alt="logo" /> */}
                                <h3 className="font-extrabold">KYLE WANG</h3>
                            </a>
                        </div>
                        <div>
                            <ul className="flex items-center gap-4">
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a className="text-sm hover:text-yellow-400" href={item.href} 
                                        onClick={(e) => handleLinkClick(e, item.href)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {/* This menu will only show when the screen width is smaller than 1024px, 
                so any screen wider than 1024px will not show this menu */}
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="#">
                                {/* <img src={logo} alt="logo" width={90} className="m-2" /> */}
                                <h3 className="m-2 mx-4 font-extrabold">KYLE WANG</h3>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <button className="focus:outline-none lg:hidden mr-2" onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes size="1.5rem"/> 
                                ) : (
                                    <FaBars size="1.5rem"/>
                                )}
                            </button> 
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="block w-full text-lg" onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar