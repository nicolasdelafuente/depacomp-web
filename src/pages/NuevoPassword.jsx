const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-green-600 font-black text-5xl capitalize mb-6">Deparatamento de Acompañamiento</h1>
      <h2 className="text-emerald-900 font-black text-4xl capitalize">Restablecer contraseña</h2>
      <form className="my-3 bg-white shadow rounded-lg p-10">

        <div className="my-5">
          <label
            className="upperclase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >Nuevo Password</label>
          <input
            id="password"
            type="password"
            placeholder="Escribe tu nuevo password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Guardar nuevo password"
          className="bg-green-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
          hover=cursor-pointer hover:bg-green-800 transition-colors"
        />
      </form>
    </>
  )
}

export default NuevoPassword