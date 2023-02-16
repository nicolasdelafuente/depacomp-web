import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alerta from '../components/Alerta';

const Registrar = () => {
  
  const [ nombre, setNombre ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repetirPassword, setRepetirPassword ] = useState('')
  const [ alerta, setAlerta ] = useState({})

  console.log(process.env.BACKEND_URL);

  const handleSubmit = async e => {
    e.preventDefault();

    if([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({
          msg: 'Todos los campos son obligatorios',
          error: true
      })
      return
    }

    if(password !== repetirPassword ) {
      setAlerta({
          msg: 'Los password no son iguales',
          error: true
      })
      return
  }

  if(password.length < 7 ) {
      setAlerta({
          msg: 'El Password debe conener al menso 7 carácteres',
          error: true
      })
      return
  }

    setAlerta({})

    // Crear usuario en la Api
    try {

      /*
      const data = await axios.post('http://localhost:4000/api/usuario',
        { nombre, password, email }
      )

      setAlerta({
        msg: data.msg,
        error: false
      })
      */

      setAlerta({
        msg: 'Usuario creado correctamente',
        error: false
      })

      setNombre('');
      setEmail('');
      setPassword('');
      setRepetirPassword('');

    } catch (error) {

      setAlerta({
        msg: error.response.data.msg,
        error: false
      })
    }
    
  }

  const { msg } = alerta
  
  return (
      <>
        <h1 className="text-green-600 font-black text-5xl capitalize mb-6">Deparatamento de Acompañamiento</h1>
        <h2 className="text-emerald-900 font-black text-4xl capitalize">Crear Cuenta</h2>
        
        { msg && <Alerta alerta={alerta} /> }

        <form 
          className="my-3 bg-white shadow rounded-lg p-10"
          onSubmit={handleSubmit}
        >

          <div className="my-5">
            <label
              className="upperclase text-gray-600 block text-xl font-bold"
              htmlFor="nombre"
            >Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label
              className="upperclase text-gray-600 block text-xl font-bold"
              htmlFor="email"
            >Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email de registro"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
    
          <div className="my-5">
            <label
              className="upperclase text-gray-600 block text-xl font-bold"
              htmlFor="password"
            >Password</label>
            <input
              id="password"
              type="password"
              autoComplete="off"
              placeholder="Password de registro"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label
              className="upperclase text-gray-600 block text-xl font-bold"
              htmlFor="password"
            >Repetir Password</label>
            <input
              id="repetirPassword"
              type="password"
              autoComplete="off"
              placeholder="Repetir tu password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={repetirPassword}
              onChange={e => setRepetirPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-green-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
            hover=cursor-pointer hover:bg-green-800 transition-colors"
          />


        </form>
  
        <nav className='lg:flex lg:justify-between'>
          <Link 
            className='block text-center my-5 text-state-500 uppercase text-sm'
            to="/"
          >¿Ya tienes una cuenta? Iniciar Sesión</Link>
  
        <Link 
            className='block text-center my-5 text-state-500 uppercase text-sm'
            to="/olvide-password"
          >Recuperar contraseña</Link>
        </nav>
      </>
  )
}

export default Registrar;