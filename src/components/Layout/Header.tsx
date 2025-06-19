// src/components/Layout/Header.tsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{ padding: '1rem', background: '#eee', marginBottom: '1rem' }}
    >
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">🏠 Home</Link>
        <Link to="/menu">🍽️ Menu</Link>
        <Link to="/cart">🛒 Cart</Link>
        <Link to="/success">✅ Success</Link>
      </nav>
    </header>
  );
};

export default Header;
