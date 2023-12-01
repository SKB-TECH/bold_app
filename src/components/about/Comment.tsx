import { useEffect } from "react";
import { comment} from "../../data";
import { Timeline } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Comment = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
          });
      })
  return (
    <section id="comment" className='w-full md:h-[35rem] flexCenter  flex flex-col md:flex-row px-4 py-4 gap-10  md:padding-container'>
        <div  className="c">
            <div data-aos="zoom-in" className={"w-[95%] flex flex-col flexCenter  gap-5 mt-5 md:mt-0"} >
                        <div className="flex flex-col flexCenter">
                            <h2 className="bold-18 md:bold-32">{comment.map((tit)=>(
                                tit.title
                            ))}</h2>
                            <span className="flex mt-2"><hr className="w-56 h-2 bg-rouge flex items-center"/><hr className="w-36 h-2 bg-secondary-dark-bg"/></span>
                        </div>
               
                   {
                    comment.map((item)=>(
                            item?.detail?.map((it)=>(
                               <>
                                <p className="bold-18">{it.sub}</p>
                                <Timeline items={it.resume} style={{fontSize:'18px'}} className="md:flexCenter md:gap-5  regular-14 md:regular-16 3xl:regular-32"/>
                               </>
                            ))
                        
                     
                    ))
                   }
                   
            </div>
            
        </div>
    </section>
  )
}

export default Comment