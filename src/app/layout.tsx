import React from 'react';
import './globals.css';
import DragDropProvider from './components/DragDropProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Outfit Builder',
  description: 'Drag and drop to build your outfit',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-white to-blue-50 min-h-screen`}>
      <DragDropProvider>
        {children}
      </DragDropProvider>
      </body>
    </html>
  );
}
