import logo from '../assets/logo.png';
import {Form,Input} from 'antd'


const Login = () => {
  return (
    <section className="flex flex-col flexCenter items-cent h-screen w-full">
            <div  className="w-full flex items-center justify-center md:h-[40rem] bg-[#ffffff] h-full padding-container">
                    <div className="flex flex-col items-center gap-5 p-6 bg-white h-[28rem] w-[100%] md:w-[30%]  shadow  border ">
                            <img src={logo} alt="" width={150} height={150}/>
                            <h3 className='text-rouge-100 bold-20 uppercase'>Authentification</h3>
                            <Form className='flex flex-col gap-10 w-full'>
                                <Input size='large' placeholder='email'/>
                                <Input.Password size='large' placeholder='mot de passe'/>
                                <button className='text-white bg-rouge h-10 rounded-lg bold-18'>Connexion</button>
                            </Form>
                    </div>
            </div>
    </section>
  )
}

export default Login
