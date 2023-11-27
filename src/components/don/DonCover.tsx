import React from 'react'
import { alldon } from '../../data'

const HomeCover = () => {
  return (
    <div>
      <div className='don  z-0 mt-14 h-[30rem] 3xl:h-[50rem]'>
         <div className='bg-gradient-to-r from-black padding-container  min-h-full flex flex-col justify-center gap-10'>
                
                    {
                        alldon?.map((its)=>(
                           
                            <>
                                <h2 className= ' bold-20 md:bold-40 text-white'>
                                    { its.title}
                                </h2>
                                <p className='md:w-[500px] text-white regular-16'>
                                    {its.sub}
                                </p>
                            </>
                        ))
                    }
         </div>
         
      </div>
    </div>
  )
}

export default HomeCover