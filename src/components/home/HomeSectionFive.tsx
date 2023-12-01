import { useState } from 'react'
import { resnews } from '../../data'
import { Toaster } from 'react-hot-toast';
import { subscribe } from '../../contexts/api/newsletter';
import { errorMessageHadler } from '../../utils';

const HomeSectionFive = () => {
  // @ts-ignore
  // const { subscribeAction } = useContext(NewsletterContext);


  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const subscribeAction = (data: any) => {
    try {
      subscribe(data);
    } catch (e) {
      errorMessageHadler(e)
    }
  }

  return (
    <section className='w-full md:h-[24rem] flex flex-col md:flex-row flexCenter px-4 py-4 gap-10 md:py-20 md:padding-container bg-[#282828]'>
      <div className='flex flex-col md:flex-row gap-5 w-[97%] md:w-[1/2]'>
        {
          resnews.map((items, index) => (
            <div className='flex flex-col gap-5 ' key={index}>
              <h2 className='bold-18 text-white md:bold-32'>{items.title}</h2>
              <p className='regular-16 text-white'>{items.resume}</p>
            </div>
          ))
        }
      </div>
      <div className='flex flex-col gap-5 mg:gap-15 w-[97%] md:w-[1/2]'>
        <input type={"text"} placeholder='Noms ' onChange={e => setName(e.target.value)} className='p-2 outline-none  w-[99%]   md:w-[93%] h-10 border border-gray-400 rounded-md ' />
        <input type={"emvotrwail"} placeholder='Addresse email ' onChange={e => setMail(e.target.value)} className='p-2 outline-none  w-[99%] md:w-[93%] h-10 border border-gray-400 rounded-md' />
        <button
          onClick={() => subscribeAction({ name, mail })}
          className='outline-none w-[99%]  md:w-[93%] h-10 border border-gray-400  rounded-md bg-rouge text-white bold-18'
        >
          S'Inscrire
        </button>
      </div>
      <Toaster />
    </section>
  )
}

export default HomeSectionFive
