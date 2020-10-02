import React, { useEffect, useState } from 'react'

type ContextProps = {
  items: any
  setItems: any
}

export const ListContext = React.createContext<Partial<ContextProps>>({})

export const ListContextProvider: React.FC = ({ children }) => {
  const key = 'list'
  const [items, setItems] = useState(() => {
    const stickyValue = localStorage.getItem(key)
    return stickyValue !== null ? JSON.parse(stickyValue) : []
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items))
  }, [key, items])

  return <ListContext.Provider value={{ items, setItems }}>{children}</ListContext.Provider>
}
