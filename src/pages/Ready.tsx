/* eslint-disable jsx-a11y/img-redundant-alt */
// import { useParams } from "react-router-dom";
import logo from '../assets/logo.png';
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useArticleContext } from '../contexts/ArticleContext';


const Ready = () => {
  const { id } = useParams();
  // @ts-ignore
  const { articles } = useArticleContext();

  const article = articles?.find((item: any) => item.idArticle = id);
  const date = new Date(article?.updatedAt);
  return (
    <section className="flex flex-col flexCenter w-full md:mt-44 mt-28 gap-5 md:h-full] md:mb-32">
      <div className="flex flex-col  w-[100%] md:w-[80%]  rounded-lg gap-5 p-4">
        <span className="bg-[#fef5f1] text-rouge-100 w-44 p-1 text-center font-bold rounded-lg ">{"Article"}</span>
        <h1 className="bold-20 md:bold-32 md:w-[1000px]">{article?.title}</h1>
        <div className='flex gap-3'>
          <img src={logo} width={90} height={100} alt='logo' />
          <p className='text-gray-30 flex flexCenter gap-1'><FaRegCalendarAlt /><span className='mt-1'>{date.toLocaleString("fr-FR")}</span></p>
        </div>
        <img src={article?.image} width={1000} height={400} alt="image" className="w-full md:h-[35rem] rounded-lg shadow-md" />
        <p className="rounded-lg w-[97%] mt-3">{article?.description}</p>
      </div>


    </section>
  )
}

export default Ready