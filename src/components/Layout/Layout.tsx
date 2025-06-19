// src/components/Layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1 overflow-auto p-4 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
