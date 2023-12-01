/* eslint-disable jsx-a11y/anchor-is-valid */
//@ts-nocheck
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import {IoMdNotifications} from 'react-icons/io'
import {MdDarkMode,MdOutlineDarkMode} from 'react-icons/md'
import {GrMenu} from 'react-icons/gr'
import {FaGithub} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
// fin items
const NavbarDash = () => {
  const [active, setActive] = useState(false);
  const [mode, setMode]=useState<boolean>(true)
  const [isScroll, setIsScroll] = useState(false);
  const router=useNavigate();
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
  };

  const handlClic = () => {
    setActive(!active);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  return (
    <header className='flex justify-end gap-10 items-center bg-white  w-[100%] h-44 bg-orange-600 fixed z-[0]'>
        <nav className='hidden sm:flex justify-between gap-10 ml-5'>
            <ul className='flex justify-end items-center  mr-10'>
              <li className='mr-2'><IoMdNotifications size={30} className='p-1 rounde'/></li>
              <li className='mr-1'>
                {
                  mode ? <MdDarkMode size={25}/>:<MdOutlineDarkMode size={30} className='p-2 rounded-full shadow-2xl' />
              }</li>
            </ul>
        </nav>
    <span className='mr-5 sm:hidden'><GrMenu size={25}/></span>
</header>
  );
};
export default NavbarDash ;