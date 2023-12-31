import { bannier } from '../../data'
import { Button } from '..'
import { text } from '../../utils'



const HomeCover = () => {
  return (
    <div>
      <div className='accueil  z-0 mt-14 h-[40rem] 3xl:h-[50rem]'>
        <div className='bg-gradient-to-r from-black padding-container  min-h-full flex flex-col justify-center gap-10'>
          {
            bannier.map((item, index) => (
              <>
                <h2 className=' bold-20 md:bold-40 text-white'>
                  {text('bannierTitle')}
                </h2>
                <p className='text-white md:w-[600px]   bold-20 md:bold-40'>{item.resume}</p>
              </>
            ))
          }
          <Button type='button' texte={text("cta")} couleur='rouge' taille={44} />
        </div>
      </div>
    </div>
  )
}

export default HomeCover