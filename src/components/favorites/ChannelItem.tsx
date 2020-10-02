import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { ListContext } from '../../context/ListContext'

interface Props {
  index: number
  setFocus: any
  focus: any
  channel: any
  selectedSide: any
}
const ChannelItem: React.FC<Props> = ({ index, channel, focus, setFocus, selectedSide }) => {
  const { items, setItems } = useContext(ListContext)
  const ref = useRef(document.createElement('li'))
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
    } else {
      items.push(channel)
    }
    setItems([...items])
    setFocus(index)
  }, [index, setFocus, items, setItems, channel])

  return (
    <li
      className={`w-1/2 my-4 text-white py-6 border-0 capitalize focus:border-opacity-0 outline-none shadow-2xl rounded-lg px-24 ${
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
export default ChannelItem
