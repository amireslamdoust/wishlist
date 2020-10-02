import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { ListContext } from '../../context/ListContext'

interface Props {
  index: number
  setFocus: any
  focus: any
  channel: any
  selectedSide: any
}
const MyItem: React.FC<Props> = ({ index, channel, focus, setFocus, selectedSide }) => {
  const ref = useRef(document.createElement('li'))
  const { items, setItems } = useContext(ListContext)
  useEffect(() => {
    if (focus && ref !== null) {
      ref.current.focus()
    }
  }, [focus])

  const handleSelect = useCallback(() => {
    if (items.find((i: any) => i.cid === channel.cid)) {
      const removeIndex = items
        .map(function (i: any) {
          return i.cid
        })
        .indexOf(channel.cid)
      items.splice(removeIndex, 1)
    }
    setItems([...items])
    setFocus(index)
  }, [index, setFocus, channel, items, setItems])

  return (
    <li
      className={` my-4 text-white py-6 border-0 capitalize focus:border-opacity-0 outline-none shadow-2xl rounded-lg px-24 ${
        selectedSide && 'focus:bg-orange-700'
      }`}
      tabIndex={focus ? 0 : -1}
      role="button"
      ref={ref}
      onClick={handleSelect}
      onKeyPress={handleSelect}
    >
      <p>{index + 1}</p>
      <p>{channel.data.title}</p>
      <img
        alt=""
        src={`https://images.zattic.com/logos/${channel.data.logo_token}/white/240x135.png`}
      />
      <hr />
    </li>
  )
}
export default MyItem
