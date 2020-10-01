import React, { useCallback, useContext } from 'react'
import { useEscape } from '../hooks/useEscape'
import { LevelContext } from '../context/LevelContext'
import { useOpenMenu } from '../hooks/useOpenMenu'
import List from '../components/menu/List'
import useHandleMenu from '../hooks/useHandleMenu'
import { useKeyDown } from '../hooks/useKeyDown'

const Index = () => {
  const { level } = useContext(LevelContext)
  const { handleEscape } = useEscape()
  const { handleOpenMenu } = useOpenMenu()
  const { handleArrowKey, currentFocus, setCurrentFocus } = useHandleMenu()

  const handle = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        handleEscape()
      }
      if (level === 'root' && event.keyCode === 37) {
        handleOpenMenu()
      } else {
        handleArrowKey(event.keyCode)
      }
    },
    [handleEscape, handleOpenMenu, handleArrowKey, level],
  )
  useKeyDown(handle)

  return (
    <div>
      <div className="bg-black flex flex-wrap w-full h-full text-center h-screen">
        <div className="relative flex items-center justify-center w-full">
          <p className="text-white text-6xl capitalize">lorem ipsum</p>
        </div>
        <div className="absolute h-screen left-0 top-0 pt-32 w-66 z-10" onClick={handle}>
          {level === 'menu' && (
            <List currentFocus={currentFocus} setCurrentFocus={setCurrentFocus} />
          )}
        </div>
      </div>
    </div>
  )
}
export default Index
