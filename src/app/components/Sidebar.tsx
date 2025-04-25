import ClothingItem from './ClothingItem';

const clothingItems = [
  { id: 'shirt', src: '/assets/shirt2.webp' },
  { id: 'pants', src: '/assets/pants.jpeg' },
  { id: 'coat', src: '/assets/coat.webp' },
  { id: 'hat', src: '/assets/hat.jpeg' },
  { id: 'shoes', src: '/assets/shoes.jpeg' }
];

export default function Sidebar() {
  return (
    <div className="bg-white border rounded p-4 flex flex-col items-center space-y-4">
      {clothingItems.map((item) => (
        <ClothingItem key={item.id} id={item.id} src={item.src} />
      ))}
    </div>
  );
}
