import log from '../../assets/logo.png';
import { FaRegCalendarAlt } from "react-icons/fa";

interface Blogue {
    img?:string;
    title?:string;
    type: string;
    id?:string;
    dates?: string
}

const CardBlog = ({img,title,type,dates}:Blogue) => {
  return (
    <div className="flex flex-col gap-5 w-[100%] md:w-80 md:h-[27rem] bg-white border rounded-lg p-3 hover:drop-shadow-md translate ease-in duration-300">
          <img src={img} alt="" className='rounded-lg'/>
          <span className='flex flexCenter w-24 h-7 rounded-lg bg-[#fef5f1] text-rouge-100 font-bold'>
              {type}
          </span>

          <h2 className="bold-20 hover:underline">
            {title}
          </h2>
          <div className='flex justify-between gap-3'>
              <img src={log} width={90} height={100} alt='logo'/>
              <p className='text-gray-30 flex flexCenter gap-1'><FaRegCalendarAlt/><span className='mt-1'>{dates}</span></p>
          </div>
        </div>
  )
}

export default CardBlog
