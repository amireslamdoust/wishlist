import React, { useCallback, useState } from 'react'
import { useKeyDown } from '../hooks/useKeyDown'
import { useHistory } from 'react-router-dom'
import Item from '../components/setting/Item'

const Lists = ['favorites', 'audio', 'account']

const Setting = () => {
  const history = useHistory()
  const [currentFocus, setCurrentFocus] = useState(0)
  let size = Lists.length

  const handle = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        history.push('/')
      }
      if (event.keyCode === 39) {
        // Right arrow
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1)
      } else if (event.keyCode === 37) {
        // Left arrow
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1)
      }
    },
    [history, currentFocus, size],
  )
  useKeyDown(handle)
  return (
    <div>
      <div className="bg-black flex flex-wrap w-full h-full text-center h-screen">
        <div className="relative flex mt-20 justify-center w-full">
          <ul className="flex flex-wrap h-64 text-5xl capitalize">
            {Lists.map((title, index) => (
              <Item
                key={title}
                setFocus={setCurrentFocus}
                index={index}
                focus={currentFocus === index}
                title={title}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Setting
