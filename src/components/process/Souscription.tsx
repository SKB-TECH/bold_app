import { contact } from '../../data'
import { Steps } from '..'
import { text } from '../../utils'

const Souscription = () => {
  return (
    <section className='w-full h-screen flex flex-col flexCenter padding-container mt-32 mb-32'>
      <div className="w-[98%] md:w-[85%] h-full bg-main-bg  flex flex-col flexCenter gap-5">
        {
          contact.map((items) => (
            <>
              <h1 className="bold-18 md:bold-32">{text(`${items.title}`)}</h1>
              <p className="regular-16">{text(`${items.paragraphe}`)}</p>
            </>
          ))
        }
        <Steps />
      </div>
    </section>
  )
}

export default Souscription