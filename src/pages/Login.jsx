import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1 className="text-green-600 font-black text-5xl capitalize mb-6">Deparatamento de Acompañamiento</h1>
      <h2 className="text-emerald-900 font-black text-4xl capitalize">Iniciar sesión</h2>
      <form className="my-3 bg-white shadow rounded-lg p-10">
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
            placeholder="Password de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="iniciar Sesión"
          className="bg-green-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
          hover=cursor-pointer hover:bg-green-800 transition-colors"
        />
      </form>

      <nav className='lg:flex lg:justify-between'>
        <Link 
          className='block text-center my-5 text-state-500 uppercase text-sm'
          to="/registrar"
        >Registrarse</Link>

      <Link 
          className='block text-center my-5 text-state-500 uppercase text-sm'
          to="/olvide-password"
        >Recuperar contraseña</Link>
      </nav>
    </>
  )
}

export default Login;