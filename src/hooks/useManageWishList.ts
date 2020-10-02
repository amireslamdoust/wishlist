import { useCallback, useContext } from 'react'
import { ListContext } from '../context/ListContext'

export const useManageWishList = (channel: any, setFocus: any, index: any) => {
  const { items, setItems } = useContext(ListContext)

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

  return { handleSelect }
}
