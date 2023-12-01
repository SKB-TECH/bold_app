
import { Steps } from "antd"
import { valeurs } from "../../data"

const Principes = () => {
  return (
    <section id="principe" className="w-full md:h-[25rem]  px-4  gap-10 md:py-20 padding-container">
      <div className="flex flex-col  flexCenter gap-10 flexCenter  w-full bg-main-bg h-full border padding-container">
      <div>
                            <h2 className="bold-18 md:bold-32">{valeurs.map((tit)=>(
                                tit.title
                            ))}</h2>
                            <span className="flex items-center mt-2"><hr className="w-32 h-2 bg-rouge"/><hr className="w-32 h-2 bg-secondary-dark-bg"/></span>
                        </div>
               
                   {
                    valeurs.map((item)=>(
                            item?.deatils.map((it)=>(
                               <>
                                <p className="bold-18">{it.sub}</p>
                                <Steps items={it.resume} style={{fontSize:'18px'}} className="md:flexCenter md:gap-5  md:regular-18 text-rouge-100"/>
                               </>
                            ))
                        
                     
                    ))
                   }
      </div>
    </section>
  )
}

export default Principes
