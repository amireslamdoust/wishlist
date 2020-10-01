import React, { useEffect, useRef, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

interface Props {
  title: any
  index: number
  focus: any
  setFocus: any
}
const Item: React.FC<Props> = ({ title, focus, index, setFocus }) => {
  const ref = useRef(document.createElement('li'))
  const history = useHistory()
  useEffect(() => {
    if (focus && ref !== null) {
      ref.current.focus()
    }
  }, [focus])
  const handleSelect = useCallback(() => {
    setFocus(index)
    if (title === 'favorites') {
      history.push('/favorites/')
    } else {
      alert(`${title}`)
    }
  }, [title, index, setFocus, history])

  return (
    <li
      className="my-4 flex items-center justify-center text-white focus:bg-orange-700 py-6 border-0 capitalize focus:border-opacity-0 outline-none shadow-2xl rounded-lg px-24"
      tabIndex={focus ? 0 : -1}
      role="button"
      ref={ref}
      onClick={handleSelect}
      onKeyPress={handleSelect}
    >
      {title}
    </li>
  )
}

export default Item
