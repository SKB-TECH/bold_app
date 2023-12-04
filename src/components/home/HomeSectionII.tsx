import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {FreeMode, Pagination} from 'swiper/modules';
import { CardPoste } from '..';
import { text } from '../../utils';


const HomeSectionII = () => {
  return (
    <section className='w-full h-screen flexCenter bg-gray-200 mt-10 lg:mt-24 md:padding-container'>
      <div className={"w-[95%] md:w-[100%] flex flex-col gap-5 py-5"} >
        <h2 className='bold-20 md:bold-40 lg:ml-8'>{ text("news")}</h2>
            <div className='flex flexCenter flex-col gap-20 w-full h-full md:flex-row'>
                <Swiper
                
                breakpoints={
                  {
                    340:{
                      slidesPerView: 1,
                      spaceBetween: 15
                    },
                    768:{
                      slidesPerView: 3,
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
                className='max-w-[100%] md:max-w-full gap-20'
                >
                  <SwiperSlide>
                    <CardPoste/>  
                  </SwiperSlide>
                  <SwiperSlide>
                  <CardPoste/>  
                  </SwiperSlide>
                  <SwiperSlide>
                  <CardPoste/>  
                  </SwiperSlide>
                  <SwiperSlide>
                  <CardPoste/>  
                  </SwiperSlide>
                  <SwiperSlide>
                  <CardPoste/>  
                  </SwiperSlide>
                  <SwiperSlide>
                  <CardPoste/>  
                  </SwiperSlide>
                </Swiper>
            </div>       
    </div>
    </section>
  )
}

export default HomeSectionII
