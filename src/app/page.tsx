'use client';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';
import { CartProvider } from './components/CartContext';

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen p-8 bg-gray-200 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-black mb-10 tracking-tight">Outfit Builder</h1>
        <div className="flex flex-row justify-center gap-8 w-full max-w-6xl items-center">
          <Sidebar />
          <Canvas />
        </div>
      </div>
    </CartProvider>
  );
}
