/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { aproposII} from "../../data";
import objectif from '../../assets/femmev.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutSectionII = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
          });
      })
    
  return (
    <section className='w-full md:h-[35rem] bg-main-bg flex flex-col flexCenter padding-container mb-10'>
        <div  className="flex flex-col md:flex-row flexCenter gap-10  mt-14 lg:mt-24">
            
            <div data-aos="fade-down-right" className={"w-[95%] md:w-[900px] md:p-6 flex flex-col gap-5 mt-5 md:mt-0"}>
               <div>
               <h2 className="bold-18 md:bold-32">{aproposII.map((tit)=>(
                    tit.title
                ))}</h2>
                <span className="flex mt-2"><hr className="w-32 h-2 bg-secondary-dark-bg"/><hr className="w-32 h-2 bg-rouge"/></span>
               </div>
                   {
                    aproposII.map((item)=>(
                        item.resume.map((par)=>(
                            <p className=" regular-20 md:regular-20  text-justify">
                                {
                                    par.paragraphe
                                }
                            </p>
                        ))
                    ))
                   }
                  
            </div>
            <div className="rounded-lg md:w-[1/2] h-full shadow-md" data-aos="fade-down-left"> 
                        <img src={objectif} alt="picture" width={700} height={600} className="rounded-lg h-full"/>
            </div>
        </div>
    </section>
  )
}


export default AboutSectionII
