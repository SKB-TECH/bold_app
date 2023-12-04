/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button } from "..";
import { exoViolence } from "../../data";
import femme from '../../assets/femmev.jpeg';
import { text } from "../../utils";

const HomeSectionIII = () => {
  return (
    <section className='w-full h-screen  bg-main-bg flex flex-col flexCenter md:padding-container'>
        <div  className="w-full flex flex-col gap-5 mg;gap-0 md:flex-row items-center  mt-14 lg:mt-24">
            <div className={"w-[95%] md:w-[1/2]"} > 
              <img src={femme} alt="picture" width={600} height={600}/>
            </div>
            <div className={"w-[95%] md:w-[1/2] md:p-6 flex flex-col gap-5"} >
              <h2 className="bold-18 md:bold-20">{exoViolence.map((titles)=>(
                <span>{text("exoViolenceTitle")}</span>
              ))}</h2>
                   {
                    exoViolence.map((item)=>(
                    
                        item.resume.map((itms,index)=>(
                          <p className="regular-16 text-justify">
                            {
                              text(`exoViolenceResume${index+1}`)
                            }
                          </p>
                        ))
                    ))
                   }
                   <Button texte={text("ctaMore")} couleur="rouge" taille={52}/>
            </div>
            
        </div>
    </section>
  )
}

export default HomeSectionIII