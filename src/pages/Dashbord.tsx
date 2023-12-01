import { User } from "../components"

const Dashbord = () => {
  return (
    <div className='flex flex-col  bg-[#f5f7fa]  padding-container'>
      <div className='flex flex-col md:flex-row justify-center container mx-auto lx:px-0 gap-14 mt-14 padding-container ml-28'>
          <div  className="w-60 bg-main-bg h-24 rounded-lg flex flex-row gap-10 justify-between border"></div>
          <div  className="w-60 bg-main-bg h-24 rounded-lg flex flex-row gap-10 justify-between border"></div>
          <div  className="w-60 bg-main-bg h-24 rounded-lg flex flex-row gap-10 justify-between border"></div>
          <div  className="w-60 bg-main-bg h-24 rounded-lg flex flex-row gap-10 justify-between border"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-center container mx-auto lx:px-0 gap-14 mt-14 padding-container ml-28">
        <div className="w-[100%]  rounded-lg">
            <User/>
        </div>
      </div>
    </div>
  )
}

export default Dashbord
