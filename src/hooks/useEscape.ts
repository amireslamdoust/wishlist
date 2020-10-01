import { useContext } from 'react'
import { Levels, LevelContext } from '../context/LevelContext'

export const useEscape = () => {
  const { level, setLevel } = useContext(LevelContext)

  const handleEscape = () => {
    const currentLevel = Levels.find((l) => l.level === level)
    if (currentLevel && currentLevel.parent !== null) {
      setLevel(currentLevel.parent)
    }
  }

  return { handleEscape }
}
