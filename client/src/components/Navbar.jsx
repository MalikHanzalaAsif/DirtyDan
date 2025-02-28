import { useState, useEffect, useRef } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import "../styles/Navbar.css";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const handleCloseMenu = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
  };


    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="fixed w-full top-0 z-50 p-4 border-b border-gray-400 text-white transition-all duration-300 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section - Logo */}
        <img src="/img/DirtyDanTextLogo.png" alt="dirty dan logo" className="w-44" />

        {/* Center Section - Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6 font-medium">
          <NavLink to="/" className={({ isActive }) => `${isActive ? "active-link" : ""} hover:text-gray-400 transition`}>HOME</NavLink>

          <NavLink to="/about" className={({ isActive }) => `${isActive ? "active-link" : ""} hover:text-gray-400 transition`}>ABOUT</NavLink>

          <NavLink to="/shop" className={({ isActive }) => `${isActive ? "active-link" : ""} hover:text-gray-400 transition`}>SHOP</NavLink>

          <NavLink to="/contact" className={({ isActive }) => `${isActive ? "active-link" : ""} hover:text-gray-400 transition`}>CONTACT</NavLink>
        </div>


        {/* Right Section - Icons */}
        <div className="flex items-center space-x-4">
          <ShoppingCart className="w-6 h-6 text-white cursor-pointer hover:text-gray-400" />
          <User className="w-6 h-6 text-white cursor-pointer hover:text-gray-400" />
          {/* Hamburger Menu Button (Mobile) */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      {
        isOpen && (
          <div
            ref={menuRef}
            className="md:hidden shadow-md border-b border-gray-300 text-white absolute left-0 top-20 w-full flex flex-col space-y-4 p-4 bg-[#121411]"
          >
            <NavLink to="/" className={({ isActive }) => `${isActive ? "active-link" : ""} hover:text-gray-600 transition`} onClick={handleCloseMenu}>HOME</NavLink>

            <NavLink to="/about" className={({ isActive }) => `${isActive ? "active-link" : ""} hover:text-gray-600 transition`} onClick={handleCloseMenu}>ABOUT</NavLink>

            <NavLink to="/shop" className={({ isActive }) => `${isActive ? "active-link" : ""} hover:text-gray-600 transition`} onClick={handleCloseMenu}>SHOP</NavLink>

            <NavLink to="/contact" className={({ isActive }) => `${isActive ? "active-link" : ""} hover:text-gray-600 transition`} onClick={handleCloseMenu}>CONTACT</NavLink>
          </div>
        )
      }
    </nav>
  );
}
