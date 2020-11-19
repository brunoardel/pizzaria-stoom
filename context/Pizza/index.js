import React, { createContext, useState } from 'react'

const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {
  const [recheio, setRecheio] = useState()
  const [massa, setMassa] = useState()
  const [tamanho, setTamanho] = useState()
  const [extra, setExtra] = useState()

  return (
    <PizzaContext.Provider
      value={{
        recheio,
        setRecheio,
        massa,
        setMassa,
        tamanho,
        setTamanho,
        extra,
        setExtra,
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}

export { PizzaContext, PizzaProvider }
