
import {FaUsersCog} from 'react-icons/fa'
import { FiGift } from "react-icons/fi";
import { MdArticle } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'


function SidebarDash() {
  return (
    <aside className='bg-dark-m sidebar h-screen md:overflow-hidden  md:hover:overflow-auto pb-10  fixed max-w-[10%] min-w-[16%] drop-shadow-xl p-3 shadow-sm z-[99]'>
      <div className='flex items-center mt-4 ml-3'>
        <img src={logo} alt="logo bold" width={100} />
      </div>
       <ul className='mt-5  gap-2 w-full flex flex-col text-gray-300'>

        <li className='flex m-1 cursor-pointer border-transparent hover:border-rouge-100 border-2 p-1 rounded-xl'>
          <span className='mt-1'><FaUsersCog className='text-rouge-100' size={18}/></span>
          <Link to="/bold/dashboard" className='ml-3 mt-1'>Utilisateurs</Link>
        </li>
        <li className='flex m-1 cursor-pointer border-transparent hover:border-rouge-100  border-2 p-1 rounded-xl'>
          <span className='mt-1'><MdArticle className='text-rouge-100' size={18}/></span>
          <Link to='/bold/article' className='ml-2 mt-1 '>Article</Link>
        </li>
        <li className='flex m-1 cursor-pointer border-transparent  hover:border-rouge-100 border-2 p-1 rounded-xl'>
          <span className='mt-1'><FiGift className='text-rouge-100' size={18}/></span>
          <Link to='/bold/souscription' className='ml-2 mt-1 '>Souscriptions</Link>
        </li>
        {/* <li className='flex m-1 cursor-pointer border-transparent hover:border-rouge-100 border-2 p-1 rounded-xl '>
          <span className='mt-1'><SlSettings className='text-rouge-100' size={18}/></span>
          <Link to="/settings" className='ml-2 mt-1'>Settings</Link>
        </li> */}
       </ul>
    </aside>
  )
}

export default SidebarDash
