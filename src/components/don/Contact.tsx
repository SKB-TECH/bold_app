import { Input } from "antd"
import { contact, coordonne } from "../../data"

const Contact = () => {
  return (
    <section className="w-full md:h-[33rem] flex flex-col md:flex-row flexCenter px-4 py-4 gap-5 md:py-20 md:padding-container bg-gray-10">
      <div className="w-[100%] md:w-[40%] min-h-full flex flex-col items-center gap-9">
      {
                coordonne.map((item)=>( 
                <div className="w-full md:w-80 h-16 bg-main-bg rounded-lg border flex items-center gap-3 p-2 ">
                    <span className="w-10 h-10 rounded-full bg-[#fef5f1] self-center flex flexCenter">{item.icon}</span>
                    <div className="flex flex-col gap-1">
                        <h3 className={"bold-10"}>{item.label}</h3>
                        <span className="text-[12px] text-gray-400">{item.value}</span>
                    </div>
                </div>
           ))}
      </div>

      <div className="w-[98%] md:w-[60%] h-full bg-main-bg hover:shadow  border border-gray-300 flex flex-col gap-3 p-6">
        {
            contact.map((items)=>(
                <>
                    <h1 className="bold-18 md:bold-32">{items.title}</h1>
                    <p className="regular-16">{items.paragraphe}</p>
                </>
            ))
        }
        <div className="w-full h-full flex flex-col gap-3">
            <div className="w-[100%] flex  flex-col md:flex-row gap-3 justify-around">
                <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
                <Input type="email" className="w-full  md:w-[50%] h-10 p-2 outline-none" placeholder="Email"/>
            </div>
            <div className="w-[100%] flex  flex-col md:flex-row gap-3 justify-around">
                <Input.TextArea  className="w-full p-2 outline-none " cols={4} rows={4} placeholder="Message"/>
            </div>
            <button className='outline-none w-[100%]  h-10 border border-gray-400  rounded-md bg-rouge text-white bold-18'>Envoye</button>
        </div>
      </div>
    </section>
  )
}

export default Contact
