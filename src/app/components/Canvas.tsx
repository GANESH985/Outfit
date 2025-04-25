'use client';

import { useDrop } from 'react-dnd';
import { useState, useEffect, useRef } from 'react';
import { useCart } from './CartContext';

export default function Canvas() {
  const [items, setItems] = useState<any[]>([]);
  const { addToCart } = useCart();
  const dropRef = useRef<HTMLDivElement | null>(null);

  // ✅ Define handleDrop
  const handleDrop = (item: any) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const [{ isOver }, drop] = useDrop({
    accept: 'clothing',
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  useEffect(() => {
    if (dropRef.current) {
      drop(dropRef.current);
    }
  }, [drop]);

  const reset = () => setItems([]);

  return (
    <div ref={dropRef} className="flex flex-col items-center">
      <div
        className={`w-64 h-64 border rounded flex flex-wrap items-center justify-center bg-white ${
          isOver ? 'bg-blue-100' : ''
        }`}
      >
        {items.map((item, index) => (
          <img key={index} src={item.src} alt={item.id} className="w-16 h-16 m-1" />
        ))}
      </div>
      <div className="mt-4 flex space-x-2">
        <button onClick={reset} className="px-4 py-2 bg-gray-400 rounded">Reset</button>
        <button className="px-4 py-2 bg-green-400 rounded">Save Outfit</button>
        <button onClick={() => addToCart(items)} className="px-4 py-2 bg-blue-400 text-white rounded">
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
