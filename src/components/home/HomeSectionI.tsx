
import { mission } from "../../data";
import {Button} from '../index';
import objectif from '../../assets/objectif.png'
const HomeSectionI = () => {
  return (
    <section className='w-full md:h-[30rem] bg-main-bg flex flex-col flexCenter'>
        <div  className="flex flex-col md:flex-row flexCenter  mt-14 lg:mt-24">
            <div> <img src={objectif} alt="picture" width={300}/></div>
            <div className={"w-[95%] md:w-[900px] md:p-6 flex flex-col gap-5"} >
                   {
                    mission.map((item)=>(
                    <p className=" regular-20 md:regular-32 3xl:regular-40 text-justify">
                      {
                        item.parama1
                      }
                    </p>

                    ))
                   }
                   <Button texte="Notre mission" couleur="rouge" taille={52}/>
            </div>
            
        </div>
    </section>
  )
}

export default HomeSectionI