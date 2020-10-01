import React from 'react'
import Item from './Item'
import { Menus } from '../../hooks/useHandleMenu'

interface Props {
  currentFocus: any
  setCurrentFocus: any
}

const List: React.FC<Props> = ({ currentFocus, setCurrentFocus }) => {
  return (
    <ul className="w-white px-10 text-left text-3xl">
      {Menus.map((title, index) => (
        <Item
          key={title}
          setFocus={setCurrentFocus}
          index={index}
          focus={currentFocus === index}
          title={title}
        />
      ))}
    </ul>
  )
}

export default List
