import React, { useCallback, useContext, useState } from 'react'
import { useKeyDown } from '../hooks/useKeyDown'
import { useHistory } from 'react-router-dom'
import ChannelItem from '../components/favorites/ChannelItem'
import { useLoadChannels } from '../hooks/useLoadChannels'
import { ListContext } from '../context/ListContext'
import MyItem from '../components/favorites/MyItem'

const Favorites = () => {
  const history = useHistory()
  const { items } = useContext(ListContext)
  const { filteredChannels } = useLoadChannels()
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
  useKeyDown(handle)

  return (
    <div className="h-screen overscroll-none overflow-hidden">
      <div className="bg-black">
        <div className="flex justify-center w-full my-10">
          <div className="w-1/3">
            <ul className="flex flex-wrap w-full text-white">
              {items.map((channel: any, index: number) => {
                return (
                  <MyItem
                    key={channel.cid}
                    index={index}
                    channel={channel}
                    setFocus={setLeftCurrentFocus}
                    focus={leftCurrentFocus === index}
                    selectedSide={selectedSide === 'left'}
                  />
                )
              })}
            </ul>
          </div>
          <div className="w-2/3">
            <ul className="flex flex-wrap w-full text-white">
              {filteredChannels.map((channel, index) => {
                return (
                  <ChannelItem
                    key={channel.cid}
                    index={index}
                    channel={channel}
                    setFocus={setRightCurrentFocus}
                    focus={rightCurrentFocus === index}
                    selectedSide={selectedSide === 'right'}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Favorites
