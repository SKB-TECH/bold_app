import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {FreeMode, Pagination} from 'swiper/modules';
import { CardPostes } from '..';


const HomeSectionFour = () => {
  return (
    <section className='w-full h-screen flexCenter bg-rouge mt-10 lg:mt-24 md:padding-container'>
      <div className={"w-[95%] md:w-[100%] flex flex-col gap-5 py-5"} >
            <h2 className='bold-18 md:bold-32 lg:ml-8 text-gray-300'>Recentes Publications </h2>
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
                  disableOnInteraction: true,
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
