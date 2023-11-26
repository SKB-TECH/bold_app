import React, { useState } from 'react';
import { Button, message, Steps, theme, Input } from 'antd';

const steps = [
  {
    title: <h5 className='text-white bold-10'>Identite</h5>,
    content: 
    <div className='w-full flex flex-col md:h-[25rem] gap-4 items-center -mt-60 md:-mt-32'>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Telephone  "/>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Email  "/>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Profession  "/>
    </div>,
  },
  {
    title: <h5 className='text-white bold-10'>Addresse</h5>,
    content: 
    <div className='w-full flex flex-col md:h-[25rem] gap-4 items-center -mt-60 md:-mt-32'>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
    </div>,
  },
  {
    title: <h5 className='text-white bold-10'>Mon Soutien</h5>,
    content: 
    <div className='w-full flex flex-col md:h-[25rem] gap-4 items-center -mt-60 md:-mt-32'>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
         <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Noms  "/>
    </div>,
  },
];

const App: React.FC = () => {
//   const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
          <button  onClick={() => message.success('Processing complete!')} className='bg-rouge text-white h-12 rounded-lg shadow md:w-60 w-[100%] '>
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
