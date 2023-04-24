import { useState, useContext } from 'react';
import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import api from '../../Services/Api.js';
import { UserContext } from "../UseContext/UserContext";



const LoginPage = () => {
  
  const [userData, setUserData] = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate() 
  
  async function loginHandle(e){

    e.preventDefault();

    try{
      const userData = await api.post('session', {
        email,
        password
      })
      const User = userData.data
      const userGuard = JSON.stringify(User.email).replace(/["]/g, '');
      const nameGuard = JSON.stringify(User.name).replace(/["]/g, '');
      const idGuard = JSON.stringify(User._id).replace(/["]/g, '');
      localStorage.setItem('email', userGuard)
      localStorage.setItem('name', nameGuard)
      localStorage.setItem('id', idGuard)
      localStorage.setItem('IsLogged', true)
      const userInfo = userData.data
      console.log(userInfo)

      alert("Logado com sucesso!")
      setUserData(prevState => ({...prevState, 
        isLogged: true,
      email: userInfo.email,
    name: userInfo.name,
  _id: userInfo._id,
  }))
      navigate('/')
    }catch (err){
      alert('Falha no Login, tente novamente! ')
    }
  }
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
              Email
            </label>
            <input
              onChange={e=>setEmail(e.target.value)}
              type="email"
              value={email}
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your email address"
            />
            
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-800 font-bold mb-2">
              Password
            </label>
            <input
              onChange={e=>setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              onClick={loginHandle}
              type="submit"
              className="w-full rounded-3xl bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-xl font-medium uppercase"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <p className="mt-4 text-gray-600">
        Não Possui uma conta? {' '}
        <button className="text-blue-500 hover:text-blue-600">
          <Link to="/registrar"> Registre-se Aqui</Link>
        </button>
      </p>
    </div>
  );
};

export default LoginPage;