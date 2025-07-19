// src/pages/Home/Home.tsx
import { Home as HomeIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-8">
      <h1 className="text-3xl font-bold text-blue-600"><HomeIcon className="inline-block mr-2" /> Home Page</h1>
      <p className="mt-4 text-gray-600">
        Welcome to the Restaurant Order System
      </p>
    </div>
  );
};

export default Home;
