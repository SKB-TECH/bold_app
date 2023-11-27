import logo from '../../assets/logo.png';
import {banniers} from '../../data';
import { FaXTwitter,  FaLinkedin, FaSquareInstagram,FaSquareFacebook } from "react-icons/fa6";


const Bannier = () => {
  return (
    <section className="flex flexCenter w-full md:h-[20rem] md:mt-32 mt-44]">
        <div className="flex flex-col flexCenter w-[100%] md:w-[80%] md:h-full rounded-lg bg-[#f6f6f7] gap-1 p-6">
              <div>
                <img src={logo} alt='logo' width={150} height={150}/> 
              </div>
              {
                banniers.map((item)=>(
                    <h1 className='regular-20 font-bold text-center mt-2 md:mt-0'>{item}</h1>
                ))
              }
              <div className='flex gap-3'>
                <span  className='w-10 h-10 rounded-full bg-[#fef5f1] self-center flex flexCenter border drop-shadow-md'><FaXTwitter  size={18} color={"#af2e16"}/></span>
                <span  className='w-10 h-10 rounded-full bg-[#fef5f1] self-center flex flexCenter border drop-shadow-md'>< FaLinkedin  size={18} color={"#af2e16"}/></span>
                <span  className='w-10 h-10 rounded-full bg-[#fef5f1] self-center flex flexCenter border drop-shadow-md '><FaSquareInstagram size={18} color={"#af2e16"}/></span>
                <span  className='w-10 h-10 rounded-full bg-[#fef5f1] self-center flex flexCenter border drop-shadow-md'><FaSquareFacebook size={18} color={"#af2e16"}/></span>
              </div>
        </div>
    </section>
  )
}

export default Bannier