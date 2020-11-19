import React, { createContext, useState } from 'react'

const PointsContext = createContext()

const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState()

  return (
    <PointsContext.Provider
      value={{
        points,
        setPoints,
      }}
    >
      {children}
    </PointsContext.Provider>
  )
}

export { PointsContext, PointsProvider }
