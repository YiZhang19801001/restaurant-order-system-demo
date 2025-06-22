import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import toast from 'react-hot-toast';
import menuItems from '../../data/menuItems.json';
import PageWrapper from '../../components/PageWrapper';

const Menu = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: (typeof menuItems)[0]) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      })
    );
    toast.success(`${item.name} added to cart!`);
  };
  return (
    <PageWrapper>
      <div>
        <h1 className="text-3xl font-bold mb-6">🍽️ Our Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-2xl hover:ring-2 hover:ring-green-400 hover:scale-105 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Menu;
