import React from 'react'
import { bannier } from '../data'



const HomeCover = () => {
  return (
    <div>
      <div className='cover  z-0 mt-14 h-[36rem] 3xl:h-[50rem]'>
         <div className='bg-gradient-to-r from-black padding-container  min-h-full flex flex-col justify-center gap-10'>
            
            {
              bannier.map((item,index)=>(
                  <>
                    <h2 className='bold-40 text-white'>{item.title}</h2>
                    <p className='text-white md:w-[600px] bold-40'>{item.resume}</p>
                  </>
              ))
            }
            <button className='text-white bg-rouge w-60 h-14 rounded-lg bold-20'>Decouvrer Bold</button>
         </div>
         
      </div>
    </div>
  )
}

export default HomeCover