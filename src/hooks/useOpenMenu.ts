import { useContext } from 'react'
import { LevelContext } from '../context/LevelContext'

export const useOpenMenu = () => {
  const { setLevel } = useContext(LevelContext)

  const handleOpenMenu = () => {
    setLevel('menu')
  }

  return { handleOpenMenu }
}
