import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/index';
import { Utensils, ShoppingCart, CheckCircle, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const totalQty = useSelector((state: RootState) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50 w-full">
      <nav className="flex flex-wrap justify-around items-center text-lg font-medium text-gray-700 sm:flex-nowrap sm:justify-start sm:gap-6">
        <Link to="/" className="flex flex-col items-center text-center flex-1 hover:text-blue-500 sm:flex-row">
          <Home className="mb-1 sm:mr-1 sm:mb-0" /> Home
        </Link>
        <Link to="/menu" className="flex flex-col items-center text-center flex-1 hover:text-blue-500 sm:flex-row">
          <Utensils className="mb-1 sm:mr-1 sm:mb-0" /> Menu
        </Link>
        <Link to="/cart" className="flex flex-col items-center text-center flex-1 hover:text-blue-500 sm:flex-row">
          <motion.span key={totalQty} initial={{ scale: 1 }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.3, ease: "easeOut" }}>
            <ShoppingCart className="mb-1 sm:mr-1 sm:mb-0" />
          </motion.span> Cart ({totalQty})
        </Link>
        <Link to="/success" className="flex flex-col items-center text-center flex-1 hover:text-blue-500 sm:flex-row">
          <CheckCircle className="mb-1 sm:mr-1 sm:mb-0" /> Success
        </Link>
      </nav>
    </header>
  );
};

export default Header;
