/* eslint-disable jsx-a11y/img-redundant-alt */

import { mission } from "../../data";
import objectif from '../../assets/model1.jpg';
import { text } from "../../utils";
const HomeSectionI = () => {
  return (
    <section className='w-full md:h-[30rem] bg-main-bg flex flex-col flexCenter padding-container'>
      <div className="flex flex-col md:flex-row flexCenter  mt-14 lg:mt-24">
        <div className="w-[95%] md:w-[40%] ">
          <img src={objectif} alt="picture" width={600} height={400} className="rounded-lg shadow" />
        </div>
        <div className={"w-[95%] md:w-[60%] md:p-6 flex flex-col gap-5"} >
          {
            mission.map((item) => (
              <p className=" regular-14 md:regular-20 3xl:regular-32 text-justify">
                {
                  text("mission")
                }
              </p>

            ))
          }
          {/* <Button texte="Notre mission" couleur="rouge" taille={52}/> */}
        </div>

      </div>
    </section>
  )
}

export default HomeSectionI