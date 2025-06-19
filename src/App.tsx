// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import Success from './pages/Success/Success';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success />} />
      </Route>
    </Routes>
  );
}

export default App;
