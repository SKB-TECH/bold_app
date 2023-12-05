import React from 'react'
import { text } from '../../utils'

const ProgrammeCover = () => {
  return (
    <div>
      <div className='programme z-0 mt-14 h-[34rem] 3xl:h-[50rem]'>
         <div className='bg-gradient-to-r from-black padding-container  min-h-full flex flex-col justify-center items-center gap-10'>
           
{/*                     
                    {namePages.map((its)=>(
                        <>
                        
                        {
                            its.resume.map((it)=>(
                                <p className='text-white md:w-[600px]   bold-20 md:bold-40'>{it}</p>
                            ))
                        }
                      </>

                    ))} */}
                    
          <h2 className=' bold-20 md:bold-40 text-white'>{ text("program")}</h2>
         </div>
         
      </div>
    </div>
  )
}

export default ProgrammeCover
