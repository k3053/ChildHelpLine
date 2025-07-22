import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/images/CHL.png";

const Navbar = () => {
  const [hoverMenu, setHoverMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
    setHoverMenu(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setHoverMenu(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set your custom width/height when scrolled here:
  const scrolledWidth = "w-[90%]";  // Change to w-[800px] or w-[60%] if you prefer
  const scrolledHeight = "py-2";    // Change to py-2 or py-1.5 for height

  return (
    <header
      className={`
        fixed top-0 left-1/2 transform -translate-x-1/2 z-50 
        bg-blue-900 text-white shadow-md transition-all duration-400 ease-in-out 
        ${scrolled ? `${scrolledWidth} ${scrolledHeight} rounded-b-4xl` : "w-full py-3 rounded-none"}
      `}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <NavLink to="/" className="text-2xl font-bold tracking-wide text-white">
            Child Help Line
          </NavLink>
        </div>

        {/* Nav Menu */}
        <nav className="flex flex-wrap items-center gap-4 md:gap-6 text-white">
          <NavItem to="/" label="Home" />

          {/* Dropdown */}
          <div className="relative group">
            <span className="px-3 py-2 rounded-md cursor-pointer hover:bg-blue-600">
              Child Safety ▾
            </span>
            <div className="absolute hidden group-hover:block bg-white text-blue-900 shadow-md rounded-md mt-1 w-56 z-50">
              <DropdownItem to="/child-safety" label="Overview" />
              <DropdownItem to="/cybersecurity" label="Cybersecurity" />
              <DropdownItem to="/legal-resources" label="Legal Resources" />
              <DropdownItem to="/ministries" label="Ministries" />
              <DropdownItem to="/nutrition" label="Nutrition" />
              <DropdownItem to="/initiatives" label="Initiatives" />
            </div>
          </div>

          <NavItem to="/emergency" label="Emergency" />
          <NavItem to="/blogs-news" label="News & Blogs" />

          {/* Hover Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="focus:outline-none">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {hoverMenu && (
              <div className="absolute right-0 mt-2 bg-white text-blue-900 rounded shadow-md w-56 z-50">
                <DropdownItem to="/connect" label="Connect" />
                <DropdownItem to="/media" label="Media Links" />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "px-3 py-2 rounded-md text-sm bg-white text-blue-700 font-semibold cursor-default"
        : "px-3 py-2 rounded-md text-sm text-white hover:bg-blue-600"
    }
  >
    {label}
  </NavLink>
);

const DropdownItem = ({ to, label }) => (
  <NavLink
    to={to}
    className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-900"
  >
    {label}
  </NavLink>
);

export default Navbar;
