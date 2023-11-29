/* eslint-disable jsx-a11y/img-redundant-alt */
import {otherdon} from '../../data';
import maman from '../../assets/mamnb.jpg';
const Motivatiion = () => {
  return (
    <section className="w-full md:h-[38rem] bg-main-bg flex flex-col flexCenter padding-container">
      <div className="w-full h-full md:flex-row flex-col">
            <div className="w-[100%] flex flex-col  gap-5 md:flex-row items-center md:mt-10 mt-5 padding-container mb-10 md:mb-0">
               
                <div className="rounded-lg md:w-[1/2] h-full md:-mt-8 shadow-md" data-aos="fade-down-left"> 
                        <img src={maman} alt="picture" width={600} height={600} className="rounded-lg h-full"/>
                </div>
                <div className="w-[100%] md:w-[570px] h-[30rem] flex flex-col md:flex-row md:justify-end items-center">
                        
                        <div className='w-[100%] md:w[1/2] h-full flex flex-col '>
                        {
                            otherdon.map((items,index)=>(
                                <h2 className="bold-18 md:bold-32 w-full text-justify " key={index}>
                                    {items.title}
                                </h2>
                            ))
                        }
                        {
                            otherdon?.map((ites)=>(
                                ites.resume.map((it)=>(
                                    <div className='w-full h-full flex flex-col gap-2'>
                                        <h4 className="bold-20">{it.sub_title}</h4>
                                        <p className='regular-14 md:regular-16 3xl:regular-32'>{it.paragraphe}</p>
                                    </div>
                                ))
                            ))   
                        }
                        </div> 
                </div>
                
            </div>
      </div>
    </section>
  )
}

export default Motivatiion
