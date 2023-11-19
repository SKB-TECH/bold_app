/* eslint-disable jsx-a11y/img-redundant-alt */
//@ts-nocheck
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { GrLanguage} from "react-icons/gr";
import ReactCountryFlag from "react-country-flag";
import type { MenuProps } from "antd";
import { Dropdown,  } from "antd"
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// fin items
const Navbar = () => {
  const [active, setActive] = useState(true);
  const [isScroll, setIsScroll] = useState(false);
 
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


  // menu items definition
  const menuItems: { title: any; items: MenuProps["items"] } = [
    {
      title: <GrLanguage size={20} />,
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
      className={`uppercase fixed w-full h-16  top-0 left-0 right-0 ${isScroll && "z-[100]  bg-white border-b-2"
        }`}>
      <div className='flex items-center justify-around  w-full h-full p-6'>
        <div className='md:flex-1 cursor-pointer -mt-2' onClick={()=>router.push("/")}>
          <img
            src={logo}
            alt='Picture of the author'
            width={150}
            height={80}
            className="mt-4"
          />
        </div>
        <div className='md:flex-1 text-xl mr-2 ml-20'>
          <div className='cursor-pointer z-1000 md:hidden' onClick={handlClic}>
            <AiOutlineMenu size={45} />
          </div>
        </div>
        <div className='hidden lg:flex flex-row mr-14 justify-around gap-5'>
          {menuItems.map((item, index) => {
            const items = item.items;
            return (
              <Dropdown menu={{ items }} key={index} className={"flex justify-center items-center"}>
                <a onClick={(e) => e.preventDefault()}>
                  <h4 className="text-xl hover:text-blue_ciel transition-all duration-300 ease-in lowercase">
                    {item.title}
                    {/* <DownOutlined /> */}
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
              ? "fixed top-0 left-0 w-[75%] md:w-[45%] h-screen bg-white p-4 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-0"
          }>
          <div className='flex items-center justify-between z-[1000]'>
            <div className='' onClick={()=>router.push("/")}>
              <img
                src={logo}
                alt='Picture of the author'
                width={200}
                height={200}
              />
            </div>
            <div
              onClick={handlClic}
              className='p-2 mr-2 rounded-full shadow-lg cursor-pointer shadow-gray-400'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='my-4 border-b border-gray-300'>
            <p className='w-[85%] md:w-[90%] py-4 mx-auto '>
              Que voulez-vous faire ?
            </p>
          </div>
          <div className='flex flex-col justify-start gap-10 cursor-pointer'>
            {menuItems.map((item, index) => {
              const items = item.items;
              return (
                <Dropdown menu={{ items }} key={index} className={"flex ml-4 items-center"}>
                  <a onClick={(e) => e.preventDefault()}>
                    <h4 className="text-xl hover:text-blue_ciel transition-all duration-300 ease-in lowercase">
                      {item.title}
                      {/* <DownOutlined /> */}
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