/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
//@ts-nocheck
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { GrLanguage} from "react-icons/gr";
import ReactCountryFlag from "react-country-flag";
import type { MenuProps } from "antd";
import { Dropdown,  } from "antd"
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { links } from "../data";
import{NavLink, useNavigate} from 'react-router-dom'
import { scrollToTop } from "../utils";
// fin items
const Navbar = () => {
  const [active, setActive] = useState(false);
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


 
  //@ts-ignore
  const menuItems: {
    map(arg0: (item: any, index: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode; title: unknown; items: MenuProps["items"] 
} = [
    {
      title:<div className="flex gap-3 items-center"><GrLanguage/><span>Langues</span></div>,
      items: [
        {
          key: "3",
          label: (
            <div className={"flex gap-4"}>
              <ReactCountryFlag
                className='emojiFlag'
                countryCode='US'
                style={{
                  fontSize: "18px",
                  lineHeight: "2em",
                }}
                aria-label='United States'
                title={"Anglais"}
              />
              <p className='text-sm mt-1'>Anglais</p>
            </div>
          ),
        },
        {
          key: "4",
          label: (
            <div className={"flex gap-4"}>
              <ReactCountryFlag
                className='emojiFlag'
                countryCode='FR'
                style={{
                  fontSize: "18px",
                  lineHeight: "2em",
                }}
                aria-label='United States'
                title={"Anglais"}
              />
              <p className='text-sm mt-1'>Français</p>
            </div>
          ),
        },
      ],
    },
  ];
  return (
    <div
      className={`capitalize fixed w-full h-[100px] z-10 bg-secondary-dark-bg top-0 left-0 right-0 ${isScroll && "z-[100]  bg-secondary-dark-bg border-b-2"
        }`}>
      <div className='flex justify-between items-center  w-full h-full padding-container'>
          <NavLink to="/">
          <img src={logo} width={100} height={100} alt="logo" />
        </NavLink>
          {/* les routes  */}
          <div className="hidden md:flex justify-around ml-14">
            <ul className="flex flexCenter w-full list-none gap-10 padding-container  h-full">
                {
                  links.map((item,index)=>(
                    <li className="text-gray-300 h-full justify-center">
                      <NavLink onClick={scrollToTop} key={index} to={`/${item.link}`} className={`hover:text-rouge-100  transform ease-in duration-300 ${window.location.pathname===`/${item.link}` && 'text-rouge-100'}`}>
                        {item.title}
                      </NavLink>
                      {
                        window.location.pathname===`/${item.link}` ? <hr className="bg-rouge mt-3" />: null
                      }
                    </li>
                  ))
                }
            </ul>
          </div>
          <div className='md:flex-1 text-xl mr-2 ml-20'>
            <div className='cursor-pointer z-1000 md:hidden ml-14' onClick={handlClic}>
              <AiOutlineMenu size={45} className="text-rouge-100"/>
            </div>
          </div>
          <div className='hidden lg:flex flex-row mr-14 justify-around gap-5'>
            {menuItems.map((item, index) => {
              const items = item.items;
              return (
                <Dropdown menu={{ items }} key={index} className={"flex justify-center items-center"}>
                  <a onClick={(e) => e.preventDefault()} key={index}>
                    <h4 className="text-gray-300 hover:text-rouge-100 transition-all duration-300 ease-in capitalize">
                      {item.title}
                    </h4>
                  </a>
                </Dropdown>
              );
            })}
          </div>
      </div>
      <div
        className={
          active ? "md:fixed top-0 left-0 w-full h-screen bg-black/70 z-10" : ""
        }>
        <div
          className={
            active
              ? "fixed top-0 left-0 w-[75%] md:w-[45%] h-screen bg-secondary-dark-bg p-4 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-0"
          }>
          <div className='w-full flex items-center justify-between z-[1000]'>
            <div className='' onClick={()=>router('/')}>
              <img
                src={logo}
                alt='Picture of the author'
                width={100}
                height={100}
              />
            </div>
            <div
              onClick={handlClic}
              className='flex p-2 mr-2 rounded-full shadow-lg cursor-pointer bg-rouge'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='my-4 border-b border-gray-100'>
            <p className='w-[85%] md:w-[90%] py-4 mx-auto text-gray-30'>
              Que voulez-vous faire ?
            </p>
          </div>
          <div className='flex flex-col justify-start gap-10 cursor-pointer'>
          <div className="sm:hidden flex  flex-col justify-around ">
          <ul className="flex flex-col justify-around list-none gap-12">
              {
                links.map((item,index)=>(
                  <li className="text-gray-300 flex flex-col gap-3 hover:text-rouge-100 transform ease-in duration-300" onClick={handlClic}>
                    <NavLink to={`/${item.link}`}>{item.title}</NavLink>
                    <hr className="bg-gray-300"/>
                  </li>
                ))
              }
          </ul>
        </div>
            {menuItems.map((item, index) => {
              const items = item.items;
              return (
                <Dropdown menu={{ items }} key={index} className={"flex items-center"}>
                  <a onClick={(e) => e.preventDefault()}>
                    <h4 className="text-gray-300  hover:text-rouge-100 transition-all duration-300 ease-in capitalize">
                      {item.title}
                      {/* <hr className="bg-gray-300 h-1"/> */}
                    </h4>
                  </a>
                </Dropdown>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;