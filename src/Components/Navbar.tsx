import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
      setAboutDropdownVisible(false);
      setServicesDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const [hidden, setHidden] = useState<string>("hidden");
  const smarPhoneToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setHidden(hidden === "hidden" ? "" : "hidden");
  };

  const getLinkClasses = (path: string) => {
    return location.pathname === path ? 'text-blue-700' : 'text-gray-700';
  };

  const toggleAboutDropdown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setAboutDropdownVisible(!aboutDropdownVisible);
  };

  const toggleServicesDropdown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setServicesDropdownVisible(!servicesDropdownVisible);
  };

  return (
    <div className='Navbar'>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RCS INFO</span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={dropdownVisible}
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>
            {/* Dropdown menu */}
            {dropdownVisible && (
              <div ref={dropdownRef} className="z-50 absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                {/* User info here */}
              </div>
            )}
            <button data-collapse-toggle="navbar-user" type="button" onClick={smarPhoneToggle} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between ${hidden} w-full md:flex md:w-auto md:order-1`} id='navbar-user'>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClasses('/')}`} aria-current="page">Home</Link>
              </li>
              <li className="relative">
                <Link to="/about" onClick={toggleAboutDropdown} className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClasses('/about')}`}>About Us</Link>
                {aboutDropdownVisible && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600">
                    <li><Link to="/about/company" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Company</Link></li>
                    <li><Link to="/about/team" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Team</Link></li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <Link to="/services" onClick={toggleServicesDropdown} className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClasses('/services')}`}>Services</Link>
                {servicesDropdownVisible && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600">
                    <li><Link to="/services/personal-loan" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Personal Loan</Link></li>
                    <li><Link to="/services/home-loan" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Home Loan</Link></li>
                    <li><Link to="/services/business-loan" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Business Loan</Link></li>
                    <li><Link to="/services/auto-loan" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Auto Loan</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/news" className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClasses('/news')}`}>News</Link>
              </li>
              <li>
                <Link to="/gallery" className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClasses('/gallery')}`}>Gallery</Link>
              </li>
              <li>
                <Link to="/applynow" className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClasses('/applynow')}`}>Apply Now</Link>
              </li>
              <li>
                <Link to="/career" className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClasses('/career')}`}>Career</Link>
              </li>
              <li>
                <Link to="/contact" className={`nav-link block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClasses('/contact')}`}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
