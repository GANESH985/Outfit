'use client'

import Image from 'next/image'
import { useDrag } from 'react-dnd'

export default function ClothingItem({ id, src }: { id: string; src: string }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'clothing',
    item: { id, src },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`w-24 h-24 p-2 rounded-lg shadow-md bg-white hover:shadow-lg transition-all cursor-move ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <Image src={src} alt="Clothing item" width={96} height={96} className="rounded-md object-contain" />
    </div>
  )
}
