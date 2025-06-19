// src/components/Layout/Header.tsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50 w-full">
      <nav className="flex gap-6 text-lg font-medium text-gray-700">
        <Link to="/" className="hover:text-blue-500">
          🏠 Home
        </Link>
        <Link to="/menu" className="hover:text-blue-500">
          🍽️ Menu
        </Link>
        <Link to="/cart" className="hover:text-blue-500">
          🛒 Cart
        </Link>
        <Link to="/success" className="hover:text-blue-500">
          ✅ Success
        </Link>
      </nav>
    </header>
  );
};

export default Header;
