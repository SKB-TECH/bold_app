import { namePages } from '../../data'
import { text } from '../../utils'

const AboutCover = () => {
  return (
    <div>
      <div className='about  z-0 mt-14 h-[34rem] 3xl:h-[50rem]'>
        <div className='bg-gradient-to-r from-black padding-container  min-h-full flex flex-col justify-center gap-10'>
          {namePages.map((its) => (
            <>
              <h2 className=' bold-20 md:bold-40 text-white'>{text("namePagesTitle")}</h2>
              {
                its.resume.map((it, index) => (
                  <p className='text-white md:w-[600px]   bold-20 md:bold-40'>{text(`namePagesResume${index + 1}`)}</p>
                ))
              }
            </>
          ))}

        </div>
      </div>
    </div>
  )
}

export default AboutCover
