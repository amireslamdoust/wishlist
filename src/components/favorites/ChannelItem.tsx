import React, { useEffect, useRef } from 'react'
import Item from './Item'
import { useManageWishList } from '../../hooks/useManageWishList'

interface Props {
  index: number
  setFocus: any
  focus: any
  channel: any
  selectedSide: any
}
const ChannelItem: React.FC<Props> = ({ index, channel, focus, setFocus, selectedSide }) => {
  const ref = useRef(document.createElement('li'))
  const { handleSelect } = useManageWishList(channel, setFocus, index)
  useEffect(() => {
    if (focus && ref !== null) {
      ref.current.focus()
    }
  }, [focus])

  return (
    <li
      className={`border border-black capitalize h-full outline-none bg-gray-800 text-white w-1/2 ${
        selectedSide && 'focus:bg-orange-700 focus:border-white'
      }`}
      tabIndex={focus ? 0 : -1}
      role="button"
      ref={ref}
      onClick={handleSelect}
      onKeyPress={handleSelect}
    >
      <Item index={index} title={channel.data.title} logo={channel.data.logo_token} />
    </li>
  )
}
export default ChannelItem
