import React from 'react'
import { usePaddingNumber } from '../../hooks/usePaddingNumber'
interface Props {
  index: number
  title: string
  logo: string
}
const Item: React.FC<Props> = ({ index, title, logo }) => {
  const { zeroPadding } = usePaddingNumber()
  return (
    <div className=" py-4 flex flex-wrap items-center">
      <div className="mx-10">
        <p className="px-2 py-2 text-gray-300 bg-gray-600">
          {zeroPadding((index + 1).toString(), 3)}
        </p>
      </div>
      <div>
        <img
          style={{ width: '84px', height: ' 48px' }}
          alt={title}
          src={`https://images.zattic.com/logos/${logo}/white/84x48.png`}
        />
      </div>
      <div className="text-lg px-10">
        <p>{title}</p>
      </div>
    </div>
  )
}
export default Item
