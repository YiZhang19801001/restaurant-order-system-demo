import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/index';
import { Utensils, ShoppingCart, CheckCircle, Home } from 'lucide-react';

const Header = () => {
  const totalQty = useSelector((state: RootState) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50 w-full">
      <nav className="flex gap-6 text-lg font-medium text-gray-700">
        <Link to="/" className="hover:text-blue-500">
          <Home className="inline-block mr-1" /> Home
        </Link>
        <Link to="/menu" className="hover:text-blue-500">
          <Utensils className="inline-block mr-1" /> Menu
        </Link>
        <Link to="/cart" className="hover:text-blue-500">
          <ShoppingCart className="inline-block mr-1" /> Cart ({totalQty})
        </Link>
        <Link to="/success" className="hover:text-blue-500">
          <CheckCircle className="inline-block mr-1" /> Success
        </Link>
      </nav>
    </header>
  );
};

export default Header;
