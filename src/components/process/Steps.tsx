import React, { useState } from 'react';
import { message, Steps, DatePicker, Input, AutoComplete } from 'antd';
import { statut, dontype} from '../../data';
import {useNavigate} from 'react-router-dom';

const App: React.FC = () => {

  const router=useNavigate();
  const [current, setCurrent] = useState(0);
  const [donInput,setDonInput]=useState({})
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };



const steps = [
    {
      title: <h5 className='text-white bold-10'>Identite</h5>,
      content: 
      <div className='w-full flex flex-col md:h-[30rem] gap-5 items-center -mt-60 md:-mt-44  p-6 3xl:-mt-80'>
           <AutoComplete placeholder={"Votre statut"} className="w-full md:w-[50%]  outline-none" size='large' options={statut} filterOption={true} onChange={(value:string)=>{
                setDonInput({...donInput,categorie:value})
           }}/>
           <Input type="text" className="w-full md:w-[50%]   outline-none" placeholder="Noms  " size='large'/>
           <Input type="text" className="w-full md:w-[50%]   outline-none" placeholder="Telephone  " size='large'/>
           <Input type="text" className="w-full md:w-[50%]    outline-none" placeholder="Email  " size='large'/>
           <Input type="text" className="w-full md:w-[50%]   outline-none" placeholder="Profession ou Marque  " size='large'/>
      </div>,
    },
    {
      title: <h5 className='text-white bold-10'>Addresse</h5>,
      content: 
      <div className='w-full flex flex-col md:h-[25rem] gap-4 items-center -mt-60 md:-mt-44  p-6 3xl:-mt-80'>
           <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Pays  "/>
           <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Province  "/>
           <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Ville  "/>
           <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
      </div>,
    },
    {
      title: <h5 className='text-white bold-10'>Mon Soutien</h5>,
      content: 
      <div className='w-full flex flex-col md:h-[25rem] gap-4 items-center -mt-60 md:-mt-44  p-6 3xl:-mt-80'>
           <AutoComplete filterOption={true} placeholder={"type de don "} className="w-full md:w-[50%]  outline-none" size='large' options={dontype} onChange={(value:string)=>{
                             setDonInput({...donInput,type:value})
           }}/>
           <div className="w-full flex flex-col items-center">
            { 
              // @ts-ignore
                donInput?.type === "financier" ? (<Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Montant  "/>):(
                <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Nom du materiel  "/>)
            }
           </div>
           <DatePicker className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Date de livraison "/>
      </div>,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Steps responsive={false} current={current} items={items} className='hidden bg-rouge text-white h-14 md:flex flexCenter p-6 '/>
      <div className="w-full h-full flex flexCenter">{steps[current].content}</div>
      <div className='w-full h-24 flex md:flex-row flex-col gap-3 flexCenter mb-5 md:-mt-96 -mt-60'>
        {current < steps.length - 1 && (
          <button type="button" onClick={() => next()} className='bg-rouge text-white h-12 md:w-60 w-[100%]  rounded-lg shadow'>
             {"Suivant"}
          </button>
        )}
        {current === steps.length - 1 && (
          <button  onClick={() => {message.success('Merci beaucoup pour votre soutin !');router('/don')}} className='bg-rouge text-white h-12 rounded-lg shadow md:w-60 w-[100%] '>
             Envoye
          </button>
        )}
        {current > 0 && (
          <button style={{ margin: '0 8px' }} onClick={() => prev()} className='bg-main-bg text-rouge-100 h-12 md:w-60 w-[100%] rounded-lg shadow border border-rouge-100 '>
            Precedent
          </button>
        )}
      </div>
    </>
  );
};

export default App;
