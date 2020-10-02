import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const useFavoritesArrowKeys = (filteredChannels: any, items: any) => {
  const history = useHistory()
  const [rightCurrentFocus, setRightCurrentFocus] = useState(0)
  const [leftCurrentFocus, setLeftCurrentFocus] = useState(0)
  const [selectedSide, setSelectedSide] = useState<'left' | 'right'>('right')
  const rightSize = filteredChannels.length
  const leftSize = items.length

  const handle = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        history.push('/setting')
      }

      if (selectedSide === 'left') {
        if (event.keyCode === 39) {
          setSelectedSide('right')
          setRightCurrentFocus(2)
        } else if (event.keyCode === 38) {
          // Up Arrow
          setLeftCurrentFocus(
            leftCurrentFocus === 0
              ? 0
              : leftCurrentFocus - 1 < 0
              ? leftCurrentFocus
              : leftCurrentFocus - 1,
          )
        } else if (event.keyCode === 40) {
          // Down Arrow
          setLeftCurrentFocus(
            leftCurrentFocus === leftSize - 1
              ? rightSize - 1
              : leftCurrentFocus + 1 > leftSize - 1
              ? leftCurrentFocus
              : leftCurrentFocus + 1,
          )
        }
      }
      if (selectedSide === 'right') {
        // left and right
        if (event.keyCode === 37) {
          // Left Arrow
          if (rightCurrentFocus % 2 === 0) {
            // move to left
            setSelectedSide('left')
            setLeftCurrentFocus(1)
          } else {
            // backward to left
            setRightCurrentFocus(rightCurrentFocus === 0 ? rightSize - 1 : rightCurrentFocus - 1)
          }
        } else if (event.keyCode === 39) {
          // Right Arrow
          if (rightCurrentFocus % 2 === 0) {
            // backward to right
            setRightCurrentFocus(rightCurrentFocus === rightSize - 1 ? 0 : rightCurrentFocus + 1)
          }
        }
        // up and down
        else if (event.keyCode === 38) {
          // Up Arrow
          setRightCurrentFocus(
            rightCurrentFocus === 0
              ? 0
              : rightCurrentFocus - 2 < 0
              ? rightCurrentFocus
              : rightCurrentFocus - 2,
          )
        } else if (event.keyCode === 40) {
          // Down Arrow
          setRightCurrentFocus(
            rightCurrentFocus === rightSize - 1
              ? rightSize - 1
              : rightCurrentFocus + 2 > rightSize - 1
              ? rightCurrentFocus
              : rightCurrentFocus + 2,
          )
        }
      }
    },
    [history, rightSize, leftSize, leftCurrentFocus, rightCurrentFocus, selectedSide],
  )

  return {
    handle,
    setLeftCurrentFocus,
    setRightCurrentFocus,
    leftCurrentFocus,
    rightCurrentFocus,
    selectedSide,
  }
}
