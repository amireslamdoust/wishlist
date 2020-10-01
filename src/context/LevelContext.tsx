import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

type ContextProps = {
  level: any
  setLevel: any
}

export const Levels = [
  { level: 'root', parent: null },
  { level: 'menu', parent: 'root' },
  { level: 'setting', parent: 'menu' },
  { level: 'wishlist', parent: 'setting' },
]

export const LevelContext = React.createContext<Partial<ContextProps>>({})

export const LevelContextProvider: React.FC = ({ children }) => {
  const location = useLocation()
  const path = location.pathname.replace(/\//g, '')
  const [level, setLevel] = useState('root')

  useEffect(() => {
    const levelIndex = Levels.find((l) => l.level === path)
    if (levelIndex) {
      setLevel(levelIndex.level)
    } else {
      setLevel('root')
    }
  }, [path])

  return <LevelContext.Provider value={{ level, setLevel }}>{children}</LevelContext.Provider>
}
