import { ArticleView } from '../components'
import { text } from '../utils'
const Articles = () => {
  return (
    <div className='flex flex-col  bg-[#f5f7fa]  padding-container h-screen'>
        <div className='flex flex-col md:flex-row container mx-auto lx:px-0 gap-14 mt-14 padding-container ml-28'>
        <button className='bg-rouge text-white w-56 h-10 rounded-lg font-bold'>{text("articleBtn")}</button>
        </div>
      <div className='flex flex-col justify-center container mx-auto lx:px-0 gap-3 mt-14 padding-container ml-28'>
        <h2 className='bold-20 text-center'>{text("articlesTitle")}</h2>
            <ArticleView/>
      </div>
    </div>
  )
}

export default Articles
