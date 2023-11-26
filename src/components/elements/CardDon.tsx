import { calldon } from "../../data"
import { useNavigate } from "react-router-dom"

const CardDon = () => {
    const router=useNavigate();
  return (
    <section className="w-full md:h-[35rem]  flex flex-col flexCenter md:padding-container mb-10">
        <div className="card w-full h-full flex flex-col md:flex-row flexCenter  mt-14 lg:mt-24 padding-container">
                <div data-aos="fade-down-right" className={" w-[95%] md:w-[1/2] md:p-6 flex flex-col p-6 flexCenter gap-10 mt-5 md:mt-0"}>
                <div>
                <h2 className="bold-18 md:bold-32 md:w-[640px] text-white text-center ">{calldon.map((tit)=>(
                        tit.sub_title
                    ))}</h2>
                    {/* <span className="flex mt-2"><hr className="w-32 h-2 bg-secondary-dark-bg"/><hr className="w-32 h-2 bg-rouge"/></span> */}
                </div>
                    {
                        calldon.map((item)=>(
                            item.resume.map((par)=>(
                                <p className=" regular-20 md:regular-16  text-justify text-white">
                                    {
                                        par.paragraphe
                                    }
                                </p>
                            ))
                        ))
                    }
                    <button onClick={()=>router('/process')} className="h-12 w-full md:w-72 bg-rouge text-white bold-18 px-2 py-2 hover:underline transform ease-in duration-300 rounded-lg">
                            {calldon.map((tit)=>(
                                tit.btn
                            ))}
                    </button>
                </div>
        </div>
    </section>
  )
}

export default CardDon