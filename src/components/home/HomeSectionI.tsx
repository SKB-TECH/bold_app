/* eslint-disable jsx-a11y/img-redundant-alt */
// import objectif from '../../assets/objectif.png';
import { mission } from "../../data";
import {Button} from '../index'
const HomeSectionI = () => {
  return (
    <section className='w-full h-[30rem] bg-main-bg flex flex-col flexCenter'>
        <div  className="flex flex-col md:flex-row flexCenter  mt-14 lg:mt-24">
            <div> <img src={require("../../assets/objectif.png")} alt="picture" width={300}/></div>
            <div className={"w-[95%] md:w-[900px] p-6 flex flex-col gap-5"} >
                   {
                    mission.map((item)=>(
                    <p className=" regular-32 3xl:regular-40 text-justify">
                      {
                        item.parama1
                      }
                    </p>

                    ))
                   }
                   <Button texte="En savoir plus " couleur="rouge" taille={52}/>
            </div>
            
        </div>
    </section>
  )
}

export default HomeSectionI