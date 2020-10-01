import { useState } from 'react'

export const Menus = ['highlights', 'guide', 'channels', 'recoding', 'search', 'setting']

function useHandleMenu() {
  const [currentFocus, setCurrentFocus] = useState(0)
  let size = Menus.length

  const handleArrowKey = (key: any) => {
    if (key === 40) {
      // Down arrow
      setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1)
    } else if (key === 38) {
      // Up arrow
      setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1)
    }
  }

  return { handleArrowKey, currentFocus, setCurrentFocus }
}

export default useHandleMenu
