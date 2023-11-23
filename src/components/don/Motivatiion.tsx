import {otherdon} from '../../data'

const Motivatiion = () => {
  return (
    <section className="w-full md:h-[38rem] bg-main-bg flex flex-col flexCenter padding-container">
      <div className="w-full h-full md:flex-row flex-col">
            <div className="w-[100%]  h-full flex flex-col  md:flex-row md:justify-end items-center padding-container mb-10 md:mb-0">
               <div className="w-[100%] md:w-[570px] h-full flex flex-col md:flex-row md:justify-end items-center">
                    
                    <div className='w-[100%] h-full flex flex-col '>
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
                                <div className='w-full h-full flex flex-col gap-2 mt-3'>
                                    <h4 className="bold-20">{it.sub_title}</h4>
                                    <p className='regular-16'>{it.paragraphe}</p>
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
