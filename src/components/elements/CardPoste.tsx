/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import photo from '../../assets/goma.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const CardPoste = () => {
  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
      });
  })
  return (
    <div data-aos="flip-up" className='w-[400px] md:w-96 h-96 md:h-[400px] bg-white rounded-lg drop-shadow-sm border hover:shadow-lg'>
        <div className="h-[48%] bg-rouge">
            <img src={photo} className="object-cover h-full w-full" alt="image"/>
        </div>
        <div className="flex flex-col p-3 gap-2">
            <h2 className="bold-18 ">Debut Campagne en RDC Pour les elections de 2023</h2>
            <p className="flex items-center gap-3 text-gray-30"><FaRegCalendarAlt /> <span>publie 20/11/2023</span></p>
            <div className="flex flex-row gap-5">
            <p className="flex items-center gap-1 text-gray-30"><AiOutlineLike/> <span>21 aiment</span></p>
        </div>
        <div>
            <button className="text-rouge-100 underline bold-18 translate ease-in duration-300">Lire l'article</button>
        </div>
        </div>
       
    </div>
  )
}

export default CardPoste