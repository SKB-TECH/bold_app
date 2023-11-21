import React from 'react'
import { bannier } from '../../data'
import { Button } from '..'


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
            <Button type='button' texte={"Decouvrer Bold"} couleur='rouge' taille={44}/>
         </div>
         
      </div>
    </div>
  )
}

export default HomeCover