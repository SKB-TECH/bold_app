/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { programme4} from "../../data";
import objectif from '../../assets/enviro.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProgrammeIV = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
          });
      })
    
  return (
    <section className='w-full md:h-[25rem] bg-main-bg flex flex-col flexCenter padding-container mb-10 md:mb-10'>
        <div  className="flex flex-col md:flex-row flexCenter gap-10  mt-10 h-full w-full">
        
            <div data-aos="fade-down-right" className={"w-[95%] md:w-[900px] md:p-6 flex flex-col gap-2 mt-5 md:mt-0"}>
               <div>
               <h2 className="bold-18 md:bold-32">{programme4.map((tit)=>(
                    tit.title
                ))}</h2>
                <span className="flex mt-2"><hr className="w-32 h-2 bg-secondary-dark-bg"/><hr className="w-32 h-2 bg-rouge"/></span>
               </div>
                   {
                    programme4.map((item)=>(
                        item.resume.map((par)=>(
                            <p className=" regular-14 md:regular-16 3xl:regular-32 text-justify">
                                {
                                    par.paragraphe
                                }
                            </p>
                        ))
                    ))
                   }
                  
            </div>
            <div className="rounded-lg h-full shadow-md" data-aos="fade-down-left"> 
                        <img src={objectif} alt="picture" width={800} height={200} className="rounded-lg h-full bg-cover"/>
            </div> 
        </div>
        <hr className="h-1 w-full bg-gray-30 mt-3"/>
    </section>
  )
}


export default ProgrammeIV

