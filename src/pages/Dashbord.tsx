import {Views } from "../components";
import { FaUsers } from "react-icons/fa";
import { useUserContext } from '../contexts/UserContext';
import { useArticleContext } from "../contexts/ArticleContext";
import { useADonContext } from "../contexts/DonContext";
import { MdArticle } from "react-icons/md";
import { FiGift } from "react-icons/fi";
const Dashbord = () => {

  //@ts-ignore
  const {users}=useUserContext();
  //@ts-ignore
  const {articles}=useArticleContext();
  //@ts-ignore
  const {don}=useADonContext();

  return (
    <div className='flex flex-col  bg-[#f5f7fa]  padding-container h-screen'>
      <div className='flex flex-col md:flex-row justify-around container mx-auto lx:px-0 gap-16 mt-14 padding-container ml-28'>
          <div  className="w-60 bg-main-bg h-24 rounded-lg flex flex-row gap-10 justify-aournd items-center p-2 border">
          <div className={` bg-[#E5FAFB] w-2 h-full flex flexCenter`}/>
            <div className="flex flex-col gap-2">
              <span className="text-gray-30 text-sm">Utilisateur</span>
              <h2 className="bold-18">{users?.length}</h2>
            </div>
            <div className={` bg-[#E5FAFB] w-10 h-10 rounded-lg flex flexCenter`}>
                <FaUsers size={25} color={'#03C9D7'}/>
            </div>
          </div>
          {/* articles */}
          <div  className="w-60 bg-main-bg h-24 rounded-lg flex flex-row gap-10 justify-aournd items-center p-2 border">
          <div className={` bg-[#3d56cf] w-2 h-full flex flexCenter`}/>
            <div className="flex flex-col gap-2">
              <span className="text-gray-30 text-sm">Articles</span>
              <h2 className="bold-18">{articles?.length}</h2>
            </div>
            <div className={` bg-[#edeffb] w-10 h-10 rounded-lg flex flexCenter`}>
                <MdArticle size={25} color={'#4357d1'}/>
            </div>
          </div>
          {/* don */}
          <div  className="w-60 bg-main-bg h-24 rounded-lg flex flex-row gap-10 justify-aournd items-center p-2 border">
          <div className={` bg-rouge w-2 h-full flex flexCenter`}/>
            <div className="flex flex-col gap-2">
              <span className="text-gray-30 text-sm">Souscriptions</span>
              <h2 className="bold-18">{don?.length}</h2>
            </div>
            <div className={` bg-[#f4d6e2] w-10 h-10 rounded-lg flex flexCenter`}>
                <FiGift size={22} color={'#d976a3'}/>
            </div>
          </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center container mx-auto lx:px-0 gap-14 mt-14 padding-container ml-28">
        <div className="w-[95%]  rounded-lg">
            <Views/>
        </div>
      </div>
    </div>
  )
}

export default Dashbord
