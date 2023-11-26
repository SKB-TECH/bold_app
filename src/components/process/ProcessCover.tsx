import { namePages } from '../../data'

const ProcessCover = () => {
  return (
    <div>
      <div className='cover  z-0 mt-14 h-[34rem] 3xl:h-[50rem]'>
         <div className='bg-gradient-to-r from-black padding-container flexCenter  min-h-full flex flex-col justify-center gap-10'>
           
                    
                    {namePages.map((its)=>(
                        <>
                        <h2 className= ' bold-20 md:bold-40 text-white'>{its.title}</h2>
                        {
                            its.resume.map((it)=>(
                                <p className='text-white md:w-[600px]   bold-20 md:bold-40'>{it}</p>
                            ))
                        }
                      </>

                    ))}
                    
                   
         </div>
         
      </div>
    </div>
  )
}

export default ProcessCover
