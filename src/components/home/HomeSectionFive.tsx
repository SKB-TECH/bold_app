import React from 'react'
import { resnews } from '../../data'

const HomeSectionFive = () => {
  return (
    <section className='w-full md:h-[24rem] flex flex-col md:flex-row flexCenter px-4 py-4 gap-10 md:py-20 md:padding-container bg-[#282828]'>
      <div className='flex flex-col md:flex-row gap-5 w-[97%] md:w-[1/2]'>
        {
          resnews.map((items,index)=>(
            <div className='flex flex-col gap-5 '>
              <h2 className='bold-18 text-white md:bold-32'>{items.title}</h2>
              <p className='regular-16 text-white'>{items.resume}</p>
            </div>
          ))
        }
      </div>
      <div className='flex flex-col gap-5 mg:gap-15 w-[97%] md:w-[1/2]'>
        <input type={"text"} placeholder='Noms ' className='outline-none  w-[99%]   md:w-[93%] h-10 border border-gray-400 rounded-md '/>
        <input type={"email"} placeholder='Addresse email ' className='outline-none  w-[99%] md:w-[93%] h-10 border border-gray-400 rounded-md'/>
        <button className='outline-none w-[99%]  md:w-[93%] h-10 border border-gray-400  rounded-md bg-rouge text-gray-300 bold-18'>Souscrire</button>
      </div>
    </section>
  )
}

export default HomeSectionFive
