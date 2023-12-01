import React, { useState } from 'react';
import { Steps, DatePicker, Input, AutoComplete, Form} from 'antd';
import { statut, dontype} from '../../data';
import { soutien } from '../../contexts/api/newsletter';
import { errorMessageHadler } from '../../utils';

const App: React.FC = () => {

  const [current, setCurrent] = useState(0);

  const [donInput, setDonInput] = useState({
    type: "",
    categorie: "",
    name: "",
    telephone: "",
    email: "",
    profession: "",
    pays: "",
    adresse: "",
    nature: "",
    date: ""
  });

  const validIdentite = () => {
    let result = true;

    if (donInput.categorie === "") result = false
    if (donInput.name === "") result = false
    if (donInput.email === "") result = false
    if (donInput.profession === "") result = false

    return result;
  }

  const validAdresse = () => {
    let result = true;

    if (donInput.pays === "") result = false
    if (donInput.adresse === "") result = false

    return result;
  }

  const validSoutien = () => {
    let result = true;

    if (donInput.type === "") result = false
    if (donInput.nature === "") result = false
    if (donInput.date === "") result = false

    return result;
  }

  const valid = () => {
    let result = true;

    if (current === 0) result = validIdentite();
    if (current === 1) result = validAdresse();
    if (current === 2) result = validSoutien();

    return result;
  }

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  const soutienAction = (data: any) => {
    try {
      //@ts-ignore
      const res = soutien(data);
    } catch (e) {
      errorMessageHadler(e)
    }
  }

  const steps = [
    {
      title: <h5 className='text-white bold-10'>Identite</h5>,
      content:
        <Form className='w-full flex flex-col md:h-[30rem] gap-5 items-center md:mt-14  p-3 3xl:-mt-80'>
          <AutoComplete placeholder={"Votre statut"} className="w-full md:w-[50%]  outline-none" size='large' options={statut} filterOption={true}
            onChange={(value: string) => {
              setDonInput({ ...donInput, categorie: value })
            }}
          />
          <Input type="text" className="w-full md:w-[50%]   outline-none" placeholder="Noms  " size='large'
            onChange={(value) => setDonInput({ ...donInput, name: value.target.value })}
          />
          <Input type="text" className="w-full md:w-[50%]   outline-none" placeholder="Telephone  " size='large'
            onChange={(value) => setDonInput({ ...donInput, telephone: value.target.value })}
          />
          <Input type="text" className="w-full md:w-[50%]    outline-none" placeholder="Email  " size='large'
            onChange={(value) => setDonInput({ ...donInput, email: value.target.value })}
          />
          <Input type="text" className="w-full md:w-[50%]   outline-none" placeholder="Profession ou Marque  " size='large'
            onChange={(value) => setDonInput({ ...donInput, profession: value.target.value })}
          />
        </Form>,
    },
    {
      title: <h5 className='text-white bold-10'>Addresse</h5>,
      content:
        <Form className='w-full flex flex-col md:h-[30rem] gap-5 items-center md:mt-14  p-3 3xl:-mt-80'>
          <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Pays  "
            onChange={(value) => setDonInput({ ...donInput, pays: value.target.value })}

          />
          <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Adresse complete  "
            onChange={(value) => setDonInput({ ...donInput, adresse: value.target.value })}
          />
        </Form>,
    },
    {
      title: <h5 className='text-white bold-10'>Mon Soutien</h5>,
      content:
        <Form className='w-full flex flex-col md:h-[30rem] gap-5 items-center md:mt-14  p-3 3xl:-mt-80'>
          <AutoComplete filterOption={true} placeholder={"type de don "} className="w-full md:w-[50%]  outline-none" size='large' options={dontype} onChange={(value: string) => {
            setDonInput({ ...donInput, type: value })
          }} />
          <div className="w-full flex flex-col items-center">
            {
              donInput?.type === "financier" ? (<Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Montant  "
                onChange={(value) => setDonInput({ ...donInput, nature: value.target.value })}
              />) : (
                <Input type="text" className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Nom du materiel  "
                  onChange={(value) => setDonInput({ ...donInput, nature: value.target.value })}

                />)
            }
          </div>
          <DatePicker className="w-full md:w-[50%]  h-10 p-2 outline-none" placeholder="Date de livraison "
            onChange={(value) => setDonInput({ ...donInput, date: value?.toISOString() || "" })}
          />
        </Form>,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Steps responsive={false} current={current} items={items} className='hidden bg-rouge text-white h-14 md:flex flexCenter p-6 '/>
      <div className="w-full md:w-[70%] md:h-[25rem] flex flex-col items-center justify-center border border-rouge-100 rounded-lg">{steps[current].content}</div>
      <div className='w-full h-24 flex md:flex-row flex-col gap-3 flexCenter'>
        {current < steps.length - 1 && (
          <button disabled={!valid()} type="button" onClick={() => next()} className='bg-rouge text-white h-12 md:w-60 w-[100%]  rounded-lg shadow'>
            {"Suivant"}
          </button>
        )}
        {current === steps.length - 1 && (
          <button disabled={!valid()}
            onClick={() => { soutienAction(donInput); }}
            className='bg-rouge text-white h-12 rounded-lg shadow md:w-60 w-[100%] '>
            Envoyer
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
