import React, { useContext } from 'react'
import { useKeyDown } from '../hooks/useKeyDown'
import ChannelItem from '../components/favorites/ChannelItem'
import { useLoadChannels } from '../hooks/useLoadChannels'
import { ListContext } from '../context/ListContext'
import MyItem from '../components/favorites/MyItem'
import { useFavoritesArrowKeys } from '../hooks/useFavoritesArrowKeys'

const Favorites = () => {
  const { items } = useContext(ListContext)
  const { filteredChannels } = useLoadChannels()
  const {
    handle,
    setLeftCurrentFocus,
    setRightCurrentFocus,
    leftCurrentFocus,
    rightCurrentFocus,
    selectedSide,
  } = useFavoritesArrowKeys(filteredChannels, items)

  useKeyDown(handle)

  return (
    <div className="overscroll-none overflow-hidden bg-black flex items-center justify-center">
      <div className="py-8 h-screen ">
        <div className="flex justify-center w-full my-10">
          <div className="w-1/3">
            <div className="px-20">
              <div>
                <h3 className="text-center font-semibold text-3xl text-white py-10">My List</h3>
              </div>
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
          </div>
          <div className="w-2/3">
            <div className="pr-20 pl-5">
              <div>
                <h3 className="text-center font-semibold text-3xl text-white py-10">
                  All Channels
                </h3>
              </div>
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
    </div>
  )
}
export default Favorites
