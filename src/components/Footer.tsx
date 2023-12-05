import { Link } from 'react-router-dom';
import log from '../assets/logo.png';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiFacebook  } from "react-icons/ci";
import { scrollToTop, text } from '../utils';

const Footer = () => (
  <footer className="padding-container flexCenter md:h-[24rem] bg-secondary-dark-bg text-gray-300 p-6">
    <div className=" max-container flex w-full flex-col gap-14">
      <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
        <Link to="/">
          <img src={log} width={120} height={100} alt="logo" className='-ml-3 md:-ml-0'/>
        </Link>
        <div className="flex flex-row flex-wrap gap-10 sm:justify-around md:flex-1">
          {
              FOOTER_LINKS?.map((items,index) => (
                <div key={index} className="flex flex-col gap-5">
                  <h4 className='bold-18 whitespace-nowrap'>
                    
                   </h4>
                    <div  className='flex flex-col'>
                        {
                          items.links.map((item)=>(
                            <Link to={`/${item}`} className='capitalize mt-2 whitespace-nowrap hover:text-rouge-100 hover:underline-offset-1 transition-all ease-in duration-300'>{item}</Link>
                          ))
                        }
                    </div>
                </div>
              ))
            }
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="bold-18 whitespace-nowrap">{FOOTER_CONTACT_INFO?.title}</h4>
          {
            FOOTER_CONTACT_INFO?.links?.map((link) => (
              <Link to="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row ">
                <p className="whitespace-nowrap hover:text-rouge-100 hover:undeline transition-all ease-in duration-300">
                  {link?.label} :
                </p>
                <p className="medium-14 whitespace-nowrap hover:text-rouge-100 hover:undeline transition-all ease-in duration-300">
                  {link?.value}
                </p>
              </Link>
            ))
          }
        </div>
        
        <div className="flex flex-col gap-5">
          <h4 className="bold-18 whitespace-nowrap">{SOCIALS.title}</h4>
          <div className='flex flex-row gap-5'>
              <Link to={"#"} className='hover:text-rouge-100'><FaXTwitter size={20}/></Link>
              <Link to={"#"} className='hover:text-rouge-100'><FaInstagram size={25}/></Link>
              <Link to={"#"} className='hover:text-rouge-100'><CiLinkedin size={25}/></Link>
              <Link to={"#"} className='hover:text-rouge-100'><CiFacebook size={25}/></Link>
          </div>
        </div>
      </div>

      <div className="border-1 bg-gary-300" />
      <p className="regular-14 w-full text-center text-gray-30">2023 Bold | All rights reserved</p>
    </div>
  </footer>
  )
export default Footer;