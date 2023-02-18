import React from 'react'

const Header = () => {
  return (
    <header className="px-4 py bg-white border-b">
      <div className="md:flex md:justfy-between">
        <h2 className="text-4xl text-green-600 font black text-center">
          Crear Seguimiento
        </h2>
        <input
          type="search"
          placeholder="Buscar Seguimiento"
          className="rounded-lg Lg:w-96 block p-2 border"
        />
      </div>
    </header>
  )
}

export default Header