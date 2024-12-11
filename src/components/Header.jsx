import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';
import userIcon from '../assets/user-icon.png';
import userIconBlue from '../assets/user-icon-blue.png';
import children from '../assets/children.png';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(store=>store.user)
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const userIconRef = useRef(null);
  const navigate = useNavigate(null);
  let timer;

  const showDropdown = () => {
    clearTimeout(timer);
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    timer = setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

  const handleSignOut = ()=> {
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <div className='absolute w-screen top-0 left-0 z-20 bg-gradient-to-b from-black px-8 py-2 flex justify-between'>
      <img className='h-12' src={logo} alt="Logo" />
      {user && <div
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        className='relative'
        ref={userIconRef}
      >
        <img className='h-10 mt-2 cursor-pointer rounded-md' src={userIcon} alt="User Icon" />
        {isDropdownVisible && (
          <div
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
            className='absolute right-0 mt-2 w-48 bg-black text-white rounded shadow-lg'
            ref={dropdownRef}
          >
            <div className='p-2 flex items-center cursor-pointer'>
              <img className='h-8 w-8 rounded-md' src={userIconBlue} alt="User Icon" />
              <span className='ml-2'>sandeepyadav5...</span>
            </div>
            <div className='p-2 flex items-center cursor-pointer'>
              <img className='h-8 w-8 rounded-md' src={children} alt="Children Icon" />
              <span className='ml-2'>Children</span>
            </div>
            <div className='p-2 cursor-pointer'>Manage Profiles</div>
            <div className='p-2 cursor-pointer'>Transfer Profile</div>
            <div className='p-2 cursor-pointer'>Account</div>
            <div className='p-2 cursor-pointer'>Help Centre</div>
            <div className='p-2 cursor-pointer' onClick={handleSignOut}>Sign out of Netflix</div>
          </div>
        )}
      </div>}
    </div>
  );
};

export default Header;
