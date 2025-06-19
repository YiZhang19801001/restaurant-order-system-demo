// src/pages/Menu/Menu.tsx
const Menu = () => {
  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">🍽️ Menu Page</h1>
      <p className="text-gray-600 mb-2">Here’s a long menu...</p>
      <div className="space-y-2">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="p-2 border rounded bg-white shadow">
            Menu Item {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
