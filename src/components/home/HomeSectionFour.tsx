import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {FreeMode, Pagination} from 'swiper/modules';
import { CardPostes } from '..';
import { text } from '../../utils';
const HomeSectionFour = () => {

  return (
    <section className='w-full md:h-[36rem] flexCenter bg-rouge mt-10 lg:mt-24 md:padding-container'>
      <div className={"w-[95%] md:w-[100%] flex flex-col gap-5 py-5"} >
            <div className='flex  flex-col md:flex-row justify-between md:items-center '>
          <h2 className='bold-18 md:bold-32 lg:ml-8 text-gray-300'>{text("publicationTitle")}</h2>
          <span className='md:padding-container text-gray-300 underline bold-18'><Link to={'/blogue'}>{text("allPublications")}</Link></span>
            </div>
            <div className='flex flexCenter flex-col gap-20 w-full h-full md:flex-row'>
                <Swiper
                breakpoints={
                  {
                    340:{
                      slidesPerView: 1,
                      spaceBetween: 15
                    },
                    768:{
                      slidesPerView: 2,
                      spaceBetween: 15
                    },

                  }
                }
                
                freeMode={true}
                pagination={{
                  clickable:true
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
    
                
                modules={[FreeMode, Pagination]}
                className='max-w-[100%] md:max-w-full gap-32'
                >
                  <SwiperSlide>
                    <CardPostes/>  
                  </SwiperSlide>
                  <SwiperSlide>
                  <CardPostes/>  
                  </SwiperSlide>
                  <SwiperSlide>
                  <CardPostes/>  
                  </SwiperSlide>
                  <SwiperSlide>
                  <CardPostes/>  
                  </SwiperSlide>
                  <SwiperSlide>
                  <CardPostes/>  
                  </SwiperSlide>
                  <SwiperSlide>
                  <CardPostes/>  
                  </SwiperSlide>
                </Swiper>
            </div>       
    </div>
    </section>
  )
}
export default HomeSectionFour
