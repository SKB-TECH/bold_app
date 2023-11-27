/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { dons} from "../../data";
import objectif from '../../assets/model3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonSectionI = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
          });
      })
    
  return (
    <section className='w-full md:h-[35rem] bg-main-bg flex flex-col flexCenter padding-container mb-5'>
        <div  className="flex flex-col md:flex-row flexCenter gap-10  mt-14 lg:mt-24">
            <div className="rounded-lg md:w-[1/2] h-full shadow-md" data-aos="fade-down-left"> 
                        <img src={objectif} alt="picture" width={700} height={600} className="rounded-lg h-full"/>
            </div>
            <div data-aos="fade-down-right" className={" alune w-[95%] md:w-[1/2] md:p-6 flex flex-col gap-5 mt-5 md:mt-0"}>
               <div>
               <h2 className="bold-18 md:bold-20">{dons.map((tit)=>(
                    tit.sub_title
                ))}</h2>
                <span className="flex mt-2"><hr className="w-32 h-2 bg-secondary-dark-bg"/><hr className="w-32 h-2 bg-rouge"/></span>
               </div>
                   {
                    dons.map((item)=>(
                        item.resume.map((par)=>(
                            <p className=" regular-20 md:regular-16  text-justify">
                                {
                                    par.paragraphe
                                }
                            </p>
                        ))
                    ))
                   }
                  
            </div>
            
        </div>
    </section>
  )
}
export default DonSectionI